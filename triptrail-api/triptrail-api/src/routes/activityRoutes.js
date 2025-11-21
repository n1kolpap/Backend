import express from 'express';
import {
  addActivity,
  removeActivity,
} from '../controllers/activityController.js';

const router = express.Router();

// Route to add an activity to a daily plan
router.post('/user/:userId/tripPlan/:tripId/dailyPlan/:date/activity', addActivity);

// Route to remove an activity from a daily plan
router.delete('/user/:userId/tripPlan/:tripId/dailyPlan/:date/activity/:activityId', removeActivity);

export default router;