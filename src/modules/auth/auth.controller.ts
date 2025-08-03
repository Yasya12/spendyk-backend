import { RegisterDto } from "./models/registerDto.interface";
import { Request, Response} from "express";
import { loginUser, registerUser } from "./auth.service";
import { LoginDto } from "./models/loginDto.interface";

export const register = async(req: Request, res: Response) => {
  try{
    const registerDto : RegisterDto = req.body;
    const user = await registerUser(registerDto);
    res.status(201).json({message: "User registered successfully", user});
  }  catch (error){
    res.status(500).json({message: "Internal server error", error: (error as Error).message});
  }
}

export const login = async(req: Request, res: Response) => {
    try{
        const loginDto : LoginDto = req.body;
        const {user, token} = await loginUser(loginDto);
        res.status(200).json({message: "User logged in successfully", user, token});
    } catch (error){
        res.status(500).json({message: "Internal server error", error: (error as Error).message});
    }
}