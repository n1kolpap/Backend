import DailyPlan from '../models/DailyPlan.js';
import TripPlan from '../models/TripPlan.js';
import { handleError, handleResponse } from '../utils/responses.js';

/**
 * @desc Get daily plan by userId and tripId
 * @route GET /user/{userId}/tripPlan/{tripId}/dailyPlan
 * @access Private
 */
export const viewDailyPlan = async (req, res) => {
    try {
        const { userId, tripId } = req.params;
        const dailyPlan = await DailyPlan.findOne({ userId, tripId });

        if (!dailyPlan) {
            return handleResponse(res, 404, null, 'Daily plan not found');
        }

        handleResponse(res, 200, dailyPlan, 'Daily plan retrieved successfully');
    } catch (error) {
        handleError(res, error);
    }
};

/**
 * @desc Add activity to daily plan
 * @route POST /user/{userId}/tripPlan/{tripId}/dailyPlan/{date}/activity
 * @access Private
 */
export const addActivityToDailyPlan = async (req, res) => {
    try {
        const { userId, tripId, date } = req.params;
        const { name, location, day, time } = req.body;

        const dailyPlan = await DailyPlan.findOneAndUpdate(
            { userId, tripId, date },
            { $push: { activities: { name, location, day, time } } },
            { new: true, runValidators: true }
        );

        if (!dailyPlan) {
            return handleResponse(res, 404, null, 'Daily plan not found');
        }

        handleResponse(res, 201, dailyPlan, 'Activity added successfully');
    } catch (error) {
        handleError(res, error);
    }
};

/**
 * @desc Remove activity from daily plan
 * @route DELETE /user/{userId}/tripPlan/{tripId}/dailyPlan/{date}/activity/{activityId}
 * @access Private
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
            return handleResponse(res, 404, null, 'Daily plan not found');
        }

        handleResponse(res, 204, null, 'Activity removed successfully');
    } catch (error) {
        handleError(res, error);
    }
};