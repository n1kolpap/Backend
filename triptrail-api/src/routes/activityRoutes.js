import express from 'express';
import {
  addActivityToDailyPlan,
  removeActivityFromDailyPlan
} from '../controllers/activityController.js';

const router = express.Router();

// Route to add an activity to a daily plan
router.post('/user/:userId/tripPlan/:tripId/dailyPlan/:date/activity', addActivityToDailyPlan);

// Route to remove an activity from a daily plan
router.delete('/user/:userId/tripPlan/:tripId/dailyPlan/:date/activity/:activityId', removeActivityFromDailyPlan);

export default router;