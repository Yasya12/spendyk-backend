import express, { Request, Response } from 'express';
import cors from 'cors';
import authRoutes from './src/modules/auth/auth.routes';
import { errorHandler } from './src/core/middlewares/error.middleware';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.use(errorHandler);

export default app;
