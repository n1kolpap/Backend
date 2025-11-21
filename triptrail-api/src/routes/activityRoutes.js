import express from 'express';
import {
  addActivityToDailyPlan,
  removeActivityFromDailyPlan
} from '../controllers/activityController.js';

const router = express.Router({ mergeParams: true });

// Route to add an activity to a daily plan
router.post('/', addActivityToDailyPlan);

// Route to remove an activity from a daily plan
router.delete('/:activityId', removeActivityFromDailyPlan);

export default router;