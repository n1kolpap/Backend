import Activity from '../models/Activity.js';
import DailyPlan from '../models/DailyPlan.js';
import { handleError, handleSuccess } from '../utils/responses.js';

/**
 * Add an activity to the daily plan.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const addActivity = async (req, res) => {
    try {
        const { userId, tripId, date } = req.params;
        const { name, location, day, time } = req.body;

        const activity = new Activity({ name, location, day, time });
        await activity.save();

        const dailyPlan = await DailyPlan.findOneAndUpdate(
            { userId, tripId, date },
            { $push: { activities: activity._id } },
            { new: true, upsert: true }
        );

        handleSuccess(res, 201, { dailyPlan });
    } catch (error) {
        handleError(res, error);
    }
};

/**
 * Remove an activity from the daily plan.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const removeActivity = async (req, res) => {
    try {
        const { userId, tripId, date, activityId } = req.params;

        await DailyPlan.findOneAndUpdate(
            { userId, tripId, date },
            { $pull: { activities: activityId } }
        );

        await Activity.findByIdAndDelete(activityId);

        handleSuccess(res, 204);
    } catch (error) {
        handleError(res, error);
    }
};