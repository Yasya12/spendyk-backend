import express from 'express';
import cors from 'cors';
import User from './src/models/user/user.model.js'; // для тимчасового маршруту (можна потім винести в модуль)

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Базовий маршрут
app.get('/', (req, res) => {
  res.send('Finance Tracker API is running');
});

// Тимчасовий тестовий маршрут (пізніше краще винести в user.module)
app.post('/test-user', async (req, res) => {
  try {
    const user = new User({
      email: 'test2@example.com',
      password: 'password123',
      name: 'Test User',
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default app;
