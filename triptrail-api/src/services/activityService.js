import Activity from '../models/Activity.js';
import DailyPlan from '../models/DailyPlan.js';

/**
 * Adds a new activity to the daily plan.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {string} date - The date of the daily plan.
 * @param {Object} activityData - The activity data to be added.
 * @returns {Promise<Object>} - The added activity.
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
        return activity;
    } catch (error) {
        throw error;
    }
};

/**
 * Removes an activity from the daily plan.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {string} date - The date of the daily plan.
 * @param {string} activityId - The ID of the activity to be removed.
 * @returns {Promise<void>}
 */
export const removeActivityFromDailyPlan = async (userId, tripId, date, activityId) => {
    try {
        const dailyPlan = await DailyPlan.findOne({ userId, tripId, date });
        if (!dailyPlan) {
            throw new Error('Daily plan not found');
        }
        dailyPlan.activities = dailyPlan.activities.filter(activity => activity.activityId !== activityId);
        await dailyPlan.save();
    } catch (error) {
        throw error;
    }
};

/**
 * Retrieves all activities for a specific daily plan.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {string} date - The date of the daily plan.
 * @returns {Promise<Array>} - The list of activities.
 */
export const getActivitiesForDailyPlan = async (userId, tripId, date) => {
    try {
        const dailyPlan = await DailyPlan.findOne({ userId, tripId, date });
        if (!dailyPlan) {
            throw new Error('Daily plan not found');
        }
        return dailyPlan.activities;
    } catch (error) {
        throw error;
    }
};