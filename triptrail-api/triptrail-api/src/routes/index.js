import express from 'express';
import userRoutes from './userRoutes.js';
import tripPlanRoutes from './tripPlanRoutes.js';
import dailyPlanRoutes from './dailyPlanRoutes.js';
import activityRoutes from './activityRoutes.js';

const router = express.Router();

const setupRoutes = (app) => {
    app.use('/user', userRoutes);
    app.use('/user/:userId/tripPlan', tripPlanRoutes);
    app.use('/user/:userId/tripPlan/:tripId/dailyPlan', dailyPlanRoutes);
    app.use('/user/:userId/tripPlan/:tripId/dailyPlan/:date/activity', activityRoutes);
};

export default setupRoutes;