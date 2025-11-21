import express from 'express';
import userRoutes from './user.js';
import tripPlanRoutes from './tripPlan.js';
import dailyPlanRoutes from './dailyPlan.js';

const router = express.Router();

// Mount user routes
router.use('/user', userRoutes);

// Mount trip plan routes
router.use('/user/:userId/tripPlan', tripPlanRoutes);

// Mount daily plan routes
router.use('/user/:userId/tripPlan/:tripId/dailyPlan', dailyPlanRoutes);

export default router;