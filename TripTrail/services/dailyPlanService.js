import DailyPlan from '../models/DailyPlan.js';
import TripPlan from '../models/TripPlan.js';
import Activity from '../models/Activity.js';
import { handleError } from '../utils/responses.js';

/**
 * Service to manage daily plans.
 */

/**
 * Create a new daily plan.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {Object} dailyPlanData - The data for the daily plan.
 * @returns {Promise<Object>} - The created daily plan.
 */
export const createDailyPlan = async (userId, tripId, dailyPlanData) => {
    try {
        const tripPlan = await TripPlan.findById(tripId);
        if (!tripPlan) {
            throw new Error('Trip plan not found');
        }

        const dailyPlan = new DailyPlan({
            ...dailyPlanData,
            userId,
            tripId,
        });

        await dailyPlan.save();
        return dailyPlan;
    } catch (error) {
        handleError(error);
    }
};

/**
 * Get daily plan by trip ID and date.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {string} date - The date of the daily plan.
 * @returns {Promise<Object>} - The daily plan.
 */
export const getDailyPlan = async (userId, tripId, date) => {
    try {
        const dailyPlan = await DailyPlan.findOne({ userId, tripId, date });
        if (!dailyPlan) {
            throw new Error('Daily plan not found');
        }
        return dailyPlan;
    } catch (error) {
        handleError(error);
    }
};

/**
 * Add an activity to the daily plan.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {string} date - The date of the daily plan.
 * @param {Object} activityData - The data for the activity.
 * @returns {Promise<Object>} - The updated daily plan.
 */
export const addActivityToDailyPlan = async (userId, tripId, date, activityData) => {
    try {
        const dailyPlan = await DailyPlan.findOne({ userId, tripId, date });
        if (!dailyPlan) {
            throw new Error('Daily plan not found');
        }

        const activity = new Activity(activityData);
        dailyPlan.activities.push(activity);
        await dailyPlan.save();
        return dailyPlan;
    } catch (error) {
        handleError(error);
    }
};

/**
 * Remove an activity from the daily plan.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {string} date - The date of the daily plan.
 * @param {string} activityId - The ID of the activity to remove.
 * @returns {Promise<Object>} - The updated daily plan.
 */
export const removeActivityFromDailyPlan = async (userId, tripId, date, activityId) => {
    try {
        const dailyPlan = await DailyPlan.findOne({ userId, tripId, date });
        if (!dailyPlan) {
            throw new Error('Daily plan not found');
        }

        dailyPlan.activities = dailyPlan.activities.filter(activity => activity._id.toString() !== activityId);
        await dailyPlan.save();
        return dailyPlan;
    } catch (error) {
        handleError(error);
    }
};