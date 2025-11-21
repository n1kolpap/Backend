import express from 'express';
import {
  createTripPlan,
  getTripPlan,
  updateTripPlan,
  deleteTripPlan
} from '../controllers/tripPlanController.js';
import { validateTripPlan } from '../middleware/validation.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Create a new trip plan
router.post('/user/:userId/tripPlan', authenticate, validateTripPlan, createTripPlan);

// Get trip plan by ID
router.get('/user/:userId/tripPlan/:tripId', authenticate, getTripPlan);

// Update trip plan by ID
router.put('/user/:userId/tripPlan/:tripId', authenticate, validateTripPlan, updateTripPlan);

// Delete trip plan by ID
router.delete('/user/:userId/tripPlan/:tripId', authenticate, deleteTripPlan);

export default router;