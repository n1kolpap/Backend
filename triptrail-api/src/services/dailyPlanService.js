import DailyPlan from '../models/DailyPlan.js';
import TripPlan from '../models/TripPlan.js';

/**
 * Service to handle daily plan operations.
 */

/**
 * Create a new daily plan for a trip.
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
            tripId,
            userId,
        });

        await dailyPlan.save();
        return dailyPlan;
    } catch (error) {
        throw error;
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
        const dailyPlan = await DailyPlan.findOne({ tripId, date, userId });
        if (!dailyPlan) {
            throw new Error('Daily plan not found');
        }
        return dailyPlan;
    } catch (error) {
        throw error;
    }
};

/**
 * Update an existing daily plan.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {string} date - The date of the daily plan.
 * @param {Object} updates - The updates for the daily plan.
 * @returns {Promise<Object>} - The updated daily plan.
 */
export const updateDailyPlan = async (userId, tripId, date, updates) => {
    try {
        const dailyPlan = await DailyPlan.findOneAndUpdate(
            { tripId, date, userId },
            updates,
            { new: true }
        );
        if (!dailyPlan) {
            throw new Error('Daily plan not found');
        }
        return dailyPlan;
    } catch (error) {
        throw error;
    }
};

/**
 * Delete a daily plan.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {string} date - The date of the daily plan.
 * @returns {Promise<void>}
 */
export const deleteDailyPlan = async (userId, tripId, date) => {
    try {
        const result = await DailyPlan.deleteOne({ tripId, date, userId });
        if (result.deletedCount === 0) {
            throw new Error('Daily plan not found');
        }
    } catch (error) {
        throw error;
    }
};