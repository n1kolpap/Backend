import express from 'express';
import { 
    viewDailyPlan, 
    addActivityToDailyPlan, 
    removeActivityFromDailyPlan 
} from '../controllers/dailyPlanController.js';

const router = express.Router();

// Route to view daily plan
router.get('/:userId/tripPlan/:tripId/dailyPlan/:date', viewDailyPlan);

// Route to add activity to daily plan
router.post('/:userId/tripPlan/:tripId/dailyPlan/:date/activity', addActivityToDailyPlan);

// Route to remove activity from daily plan
router.delete('/:userId/tripPlan/:tripId/dailyPlan/:date/activity/:activityId', removeActivityFromDailyPlan);

export default router;