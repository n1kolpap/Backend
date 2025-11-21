import express from 'express';
import { 
  viewDailyPlan, 
  createDailyPlan,
  updateDailyPlan,
  deleteDailyPlan
} from '../controllers/dailyPlanController.js';

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 * /user/{userId}/tripPlan/{tripId}/dailyPlan:
 *   get:
 *     tags:
 *       - DailyPlan
 *     summary: View daily plans for a trip
 *     responses:
 *       200:
 *         description: Daily plans found
 */

// Get all daily plans for a trip
router.get('/', viewDailyPlan);

// Create a new daily plan
router.post('/', createDailyPlan);

// Update a daily plan by date
router.put('/:date', updateDailyPlan);

// Delete a daily plan by date
router.delete('/:date', deleteDailyPlan);

export default router;