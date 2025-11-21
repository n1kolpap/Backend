import DailyPlan from '../models/DailyPlan.js';
import TripPlan from '../models/TripPlan.js';

/**
 * Service to handle daily plan operations.
 */

/**
 * Retrieve daily plan by user ID and trip ID.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip.
 * @returns {Promise<DailyPlan>} - The daily plan for the specified trip.
 */
export const getDailyPlan = async (userId, tripId) => {
    try {
        const tripPlan = await TripPlan.findOne({ userId, tripId });
        if (!tripPlan) {
            throw new Error('Trip plan not found');
        }
        const dailyPlan = await DailyPlan.findOne({ tripId });
        return dailyPlan;
    } catch (error) {
        throw error;
    }
};

/**
 * Create a new daily plan.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip.
 * @param {Object} dailyPlanData - The data for the new daily plan.
 * @returns {Promise<DailyPlan>} - The created daily plan.
 */
export const createDailyPlan = async (userId, tripId, dailyPlanData) => {
    try {
        const tripPlan = await TripPlan.findOne({ userId, tripId });
        if (!tripPlan) {
            throw new Error('Trip plan not found');
        }
        const dailyPlan = new DailyPlan({ ...dailyPlanData, tripId });
        await dailyPlan.save();
        return dailyPlan;
    } catch (error) {
        throw error;
    }
};

/**
 * Update an existing daily plan.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip.
 * @param {Object} dailyPlanData - The updated data for the daily plan.
 * @returns {Promise<DailyPlan>} - The updated daily plan.
 */
export const updateDailyPlan = async (userId, tripId, dailyPlanData) => {
    try {
        const tripPlan = await TripPlan.findOne({ userId, tripId });
        if (!tripPlan) {
            throw new Error('Trip plan not found');
        }
        const updatedDailyPlan = await DailyPlan.findOneAndUpdate(
            { tripId },
            dailyPlanData,
            { new: true }
        );
        return updatedDailyPlan;
    } catch (error) {
        throw error;
    }
};

/**
 * Delete a daily plan.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip.
 * @returns {Promise<void>} - Resolves when the daily plan is deleted.
 */
export const deleteDailyPlan = async (userId, tripId) => {
    try {
        const tripPlan = await TripPlan.findOne({ userId, tripId });
        if (!tripPlan) {
            throw new Error('Trip plan not found');
        }
        await DailyPlan.findOneAndDelete({ tripId });
    } catch (error) {
        throw error;
    }
};