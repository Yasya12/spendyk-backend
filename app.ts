import express, { Request, Response } from 'express';
import cors from 'cors';
import User from './src/modules/user/user.model';
import authRoutes from './src/modules/auth/auth.routes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

// // Базовий маршрут
// app.get('/', (req: Request, res: Response) => {
//   res.send('Finance Tracker API is running');
// });

// // Тимчасовий тестовий маршрут
// app.post('/test-user', async (req: Request, res: Response) => {
//   try {
//     const user = new User({
//       email: 'test2@example.com',
//       password: 'password123',
//       username: 'Test User',
//     });
//     await user.save();
//     res.status(201).json(user);
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

export default app;
