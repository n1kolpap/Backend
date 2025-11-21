import Activity from '../models/Activity.js';
import DailyPlan from '../models/DailyPlan.js';
import { handleError } from '../utils/responses.js';

/**
 * Add an activity to the daily plan
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export const addActivityToDailyPlan = async (req, res) => {
    try {
        const { userId, tripId, date } = req.params;
        const { name, location, day, time } = req.body;

        const activity = new Activity({ name, location, day, time });
        const dailyPlan = await DailyPlan.findOneAndUpdate(
            { userId, tripId, date },
            { $push: { activities: activity } },
            { new: true, upsert: true }
        );

        res.status(201).json({ success: true, data: dailyPlan });
    } catch (error) {
        handleError(res, error);
    }
};

/**
 * Remove an activity from the daily plan
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export const removeActivityFromDailyPlan = async (req, res) => {
    try {
        const { userId, tripId, date, activityId } = req.params;

        const dailyPlan = await DailyPlan.findOneAndUpdate(
            { userId, tripId, date },
            { $pull: { activities: { activityId } } },
            { new: true }
        );

        if (!dailyPlan) {
            return res.status(404).json({ success: false, message: 'Daily plan not found' });
        }

        res.status(200).json({ success: true, data: dailyPlan });
    } catch (error) {
        handleError(res, error);
    }
};