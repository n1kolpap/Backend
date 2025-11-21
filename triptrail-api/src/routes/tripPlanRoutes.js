import express from 'express';
import {
  createTripPlan,
  getTripPlan,
  updateTripPlan,
  deleteTripPlan
} from '../controllers/tripPlanController.js';

const router = express.Router({ mergeParams: true });

// Create a new trip plan
router.post('/', createTripPlan);

// Get trip plan by ID
router.get('/:tripId', getTripPlan);

// Update trip plan by ID
router.put('/:tripId', updateTripPlan);

// Delete trip plan
router.delete('/:tripId', deleteTripPlan);

export default router;