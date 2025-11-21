import express from 'express';
import {
  createTripPlan,
  getTripPlan,
  updateTripPlan,
  deleteTripPlan
} from '../controllers/tripPlanController.js';

const router = express.Router();

// Create a new trip plan
router.post('/user/:userId/tripPlan', createTripPlan);

// Get trip plan by ID
router.get('/user/:userId/tripPlan/:tripId', getTripPlan);

// Update trip plan by ID
router.put('/user/:userId/tripPlan/:tripId', updateTripPlan);

// Delete trip plan
router.delete('/user/:userId/tripPlan/:tripId', deleteTripPlan);

export default router;