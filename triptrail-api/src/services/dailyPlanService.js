import DailyPlan from '../models/DailyPlan.js';
import { mockDailyPlans, mockTripPlans } from '../config/mockData.js';

/**
 * Service to handle daily plan operations.
 */

/**
 * Get all daily plans for a trip.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {boolean} useMockData - Whether to use mock data
 * @returns {Promise<Array>} - Array of daily plans.
 */
export const getDailyPlans = async (userId, tripId, useMockData = false) => {
    try {
        if (useMockData) {
            // Verify trip exists
            const tripPlan = mockTripPlans.find(t => t.tripId === tripId && t.userId === userId);
            if (!tripPlan) {
                throw new Error('Trip plan not found');
            }
            const dailyPlans = mockDailyPlans.filter(d => d.tripId === tripId);
            return dailyPlans;
        }
        
        const dailyPlans = await DailyPlan.find({ tripId });
        return dailyPlans;
    } catch (error) {
        throw new Error('Error fetching daily plans: ' + error.message);
    }
};

/**
 * Create a new daily plan for a trip.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {Object} dailyPlanData - The data for the daily plan.
 * @param {boolean} useMockData - Whether to use mock data
 * @returns {Promise<Object>} - The created daily plan.
 */
export const createDailyPlan = async (userId, tripId, dailyPlanData, useMockData = false) => {
    try {
        if (useMockData) {
            const tripPlan = mockTripPlans.find(t => t.tripId === tripId && t.userId === userId);
            if (!tripPlan) {
                throw new Error('Trip plan not found');
            }
            const newDailyPlan = {
                ...dailyPlanData,
                tripId,
                activities: dailyPlanData.activities || [],
            };
            mockDailyPlans.push(newDailyPlan);
            return newDailyPlan;
        }

        const dailyPlan = new DailyPlan({
            ...dailyPlanData,
            tripId,
        });

        await dailyPlan.save();
        return dailyPlan;
    } catch (error) {
        throw new Error('Error creating daily plan: ' + error.message);
    }
};

/**
 * Get daily plan by trip ID and date.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {string} date - The date of the daily plan.
 * @param {boolean} useMockData - Whether to use mock data
 * @returns {Promise<Object>} - The daily plan.
 */
export const getDailyPlan = async (userId, tripId, date, useMockData = false) => {
    try {
        if (useMockData) {
            const dailyPlan = mockDailyPlans.find(d => d.tripId === tripId && d.date === date);
            if (!dailyPlan) {
                throw new Error('Daily plan not found');
            }
            return dailyPlan;
        }
        
        const dailyPlan = await DailyPlan.findOne({ tripId, date });
        if (!dailyPlan) {
            throw new Error('Daily plan not found');
        }
        return dailyPlan;
    } catch (error) {
        throw new Error('Error fetching daily plan: ' + error.message);
    }
};

/**
 * Update an existing daily plan.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {string} date - The date of the daily plan.
 * @param {Object} updates - The updates for the daily plan.
 * @param {boolean} useMockData - Whether to use mock data
 * @returns {Promise<Object>} - The updated daily plan.
 */
export const updateDailyPlan = async (userId, tripId, date, updates, useMockData = false) => {
    try {
        if (useMockData) {
            const index = mockDailyPlans.findIndex(d => d.tripId === tripId && d.date === date);
            if (index === -1) {
                throw new Error('Daily plan not found');
            }
            mockDailyPlans[index] = { ...mockDailyPlans[index], ...updates };
            return mockDailyPlans[index];
        }
        
        const dailyPlan = await DailyPlan.findOneAndUpdate(
            { tripId, date },
            updates,
            { new: true }
        );
        if (!dailyPlan) {
            throw new Error('Daily plan not found');
        }
        return dailyPlan;
    } catch (error) {
        throw new Error('Error updating daily plan: ' + error.message);
    }
};

/**
 * Delete a daily plan.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {string} date - The date of the daily plan.
 * @param {boolean} useMockData - Whether to use mock data
 * @returns {Promise<void>}
 */
export const deleteDailyPlan = async (userId, tripId, date, useMockData = false) => {
    try {
        if (useMockData) {
            const index = mockDailyPlans.findIndex(d => d.tripId === tripId && d.date === date);
            if (index === -1) {
                throw new Error('Daily plan not found');
            }
            mockDailyPlans.splice(index, 1);
            return;
        }
        
        const result = await DailyPlan.deleteOne({ tripId, date });
        if (result.deletedCount === 0) {
            throw new Error('Daily plan not found');
        }
    } catch (error) {
        throw new Error('Error deleting daily plan: ' + error.message);
    }
};