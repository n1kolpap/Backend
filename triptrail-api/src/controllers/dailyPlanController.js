import DailyPlan from '../models/DailyPlan.js';
import TripPlan from '../models/TripPlan.js';
import { handleError, handleSuccess } from '../utils/responses.js';

/**
 * @desc View daily plan for a specific trip
 * @route GET /user/{userId}/tripPlan/{tripId}/dailyPlan
 * @param {string} userId - User ID
 * @param {string} tripId - Trip ID
 * @returns {object} - Daily plan data
 */
export const viewDailyPlan = async (req, res) => {
    const { userId, tripId } = req.params;

    try {
        const tripPlan = await TripPlan.findOne({ _id: tripId, userId });

        if (!tripPlan) {
            return handleError(res, 404, 'Trip plan not found');
        }

        const dailyPlan = await DailyPlan.find({ tripId });

        return handleSuccess(res, 200, dailyPlan);
    } catch (error) {
        return handleError(res, 500, 'Server error');
    }
};

/**
 * @desc Add activity to daily plan
 * @route POST /user/{userId}/tripPlan/{tripId}/dailyPlan/{date}/activity
 * @param {string} userId - User ID
 * @param {string} tripId - Trip ID
 * @param {string} date - Date of the daily plan
 * @param {object} activity - Activity details
 * @returns {object} - Updated daily plan
 */
export const addActivityToDailyPlan = async (req, res) => {
    const { userId, tripId, date } = req.params;
    const activityData = req.body;

    try {
        const dailyPlan = await DailyPlan.findOneAndUpdate(
            { tripId, date },
            { $push: { activities: activityData } },
            { new: true, upsert: true }
        );

        return handleSuccess(res, 201, dailyPlan);
    } catch (error) {
        return handleError(res, 500, 'Server error');
    }
};

/**
 * @desc Remove activity from daily plan
 * @route DELETE /user/{userId}/tripPlan/{tripId}/dailyPlan/{date}/activity/{activityId}
 * @param {string} userId - User ID
 * @param {string} tripId - Trip ID
 * @param {string} date - Date of the daily plan
 * @param {string} activityId - Activity ID
 * @returns {object} - Confirmation message
 */
export const removeActivityFromDailyPlan = async (req, res) => {
    const { userId, tripId, date, activityId } = req.params;

    try {
        const dailyPlan = await DailyPlan.findOneAndUpdate(
            { tripId, date },
            { $pull: { activities: { activityId } } },
            { new: true }
        );

        if (!dailyPlan) {
            return handleError(res, 404, 'Daily plan not found');
        }

        return handleSuccess(res, 200, { message: 'Activity removed successfully' });
    } catch (error) {
        return handleError(res, 500, 'Server error');
    }
};