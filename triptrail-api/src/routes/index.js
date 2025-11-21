import express from 'express';
import userRoutes from './userRoutes.js';
import tripPlanRoutes from './tripPlanRoutes.js';
import dailyPlanRoutes from './dailyPlanRoutes.js';
import activityRoutes from './activityRoutes.js';

/**
 * Setup all application routes
 * @param {Object} app - Express application instance
 */
const setupRoutes = (app) => {
    // User routes
    app.use('/user', userRoutes);
    
    // Trip plan routes
    app.use('/user/:userId/tripPlan', tripPlanRoutes);
    
    // Daily plan routes
    app.use('/user/:userId/tripPlan/:tripId/dailyPlan', dailyPlanRoutes);
    
    // Activity routes
    app.use('/user/:userId/tripPlan/:tripId/dailyPlan/:date/activity', activityRoutes);
};

export default setupRoutes;