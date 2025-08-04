import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../user/user.model";
import { RegisterDto } from "./models/registerDto.interface";
import { LoginDto } from "./models/loginDto.interface";
import { HttpException } from "../../shared/exceptions/HttpException";

//functions
export const registerUser = async (registerDto: RegisterDto) => {
  const existingUser = await User.findOne({ email: registerDto.email });
  if (existingUser) {
    throw new HttpException(409, "User with this email already exists");
  }

  const hashedPassword = await bcrypt.hash(registerDto.password, 10);
  const newUser = new User({ email: registerDto.email, username: registerDto.username, password: hashedPassword });
  await newUser.save();
  return newUser;
};

export const loginUser = async (loginDto: LoginDto) => {
  const user = await User.findOne({ email: loginDto.email });
  if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
    throw new HttpException(401, "Invalid credentials");
  }

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );

  return { user, token };
};
