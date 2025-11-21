import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import setupRoutes from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';
import logger from './middleware/logger.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'TripTrail API is running',
    timestamp: new Date().toISOString()
  });
});

// Setup routes
setupRoutes(app);

// Error handling middleware
app.use(errorHandler);

export default app;