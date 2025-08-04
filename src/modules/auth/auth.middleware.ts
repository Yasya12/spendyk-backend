import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { HttpException } from "../../shared/exceptions/HttpException";

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: "Access token is missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = decoded; // Attach the user info to the request
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid access token" });
  }

}

export const validateEmailAndPassword = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new HttpException(400, "Email and password are required");
  }
  next();
};