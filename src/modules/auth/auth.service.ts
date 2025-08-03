import bgrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../user/user.model";
import { RegisterDto } from "./models/registerDto.interface";
import { LoginDto } from "./models/loginDto.interface";

//functions
export const registerUser = async (registerDto: RegisterDto) => {
  const hashedPassword = await bgrypt.hash(registerDto.password, 10); 
  const newUser = new User({ email: registerDto.email, username: registerDto.username, password: hashedPassword });
  await newUser.save();
  return newUser;
};

export const loginUser = async (loginDto: LoginDto) => {
  const user = await User.findOne({ email: loginDto.email });
  if (!user || !(await bgrypt.compare(loginDto.password, user.password))) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );
  
  return { user, token };
};
