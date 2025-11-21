import TripPlan from '../models/TripPlan.js';
import { mockTripPlans } from '../config/mockData.js';
import { generateUniqueId } from '../utils/helpers.js';

/**
 * Create a new trip plan for a user.
 * @param {string} userId - The ID of the user creating the trip plan.
 * @param {Object} tripPlanData - The trip plan data.
 * @param {boolean} useMockData - Whether to use mock data
 * @returns {Promise<Object>} - The created trip plan.
 */
export const createTripPlan = async (userId, tripPlanData, useMockData = false) => {
    try {
        if (useMockData) {
            const newTripPlan = {
                tripId: generateUniqueId(),
                userId,
                ...tripPlanData,
                activities: tripPlanData.activities || [],
            };
            mockTripPlans.push(newTripPlan);
            return newTripPlan;
        }
        
        const tripPlan = new TripPlan({ ...tripPlanData, userId });
        await tripPlan.save();
        return tripPlan;
    } catch (error) {
        throw new Error('Error creating trip plan: ' + error.message);
    }
};

/**
 * Get a trip plan by ID.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {boolean} useMockData - Whether to use mock data
 * @returns {Promise<Object>} - The trip plan.
 */
export const getTripPlanById = async (userId, tripId, useMockData = false) => {
    try {
        if (useMockData) {
            const tripPlan = mockTripPlans.find(t => t.tripId === tripId && t.userId === userId);
            if (!tripPlan) {
                throw new Error('Trip plan not found');
            }
            return tripPlan;
        }
        
        const tripPlan = await TripPlan.findOne({ _id: tripId, userId });
        if (!tripPlan) {
            throw new Error('Trip plan not found');
        }
        return tripPlan;
    } catch (error) {
        throw new Error('Error fetching trip plan: ' + error.message);
    }
};

/**
 * Update a trip plan by ID.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {Object} updateData - The data to update the trip plan with.
 * @param {boolean} useMockData - Whether to use mock data
 * @returns {Promise<Object>} - The updated trip plan.
 */
export const updateTripPlan = async (userId, tripId, updateData, useMockData = false) => {
    try {
        if (useMockData) {
            const index = mockTripPlans.findIndex(t => t.tripId === tripId && t.userId === userId);
            if (index === -1) {
                throw new Error('Trip plan not found');
            }
            mockTripPlans[index] = { ...mockTripPlans[index], ...updateData };
            return mockTripPlans[index];
        }
        
        const tripPlan = await TripPlan.findOneAndUpdate(
            { _id: tripId, userId },
            updateData,
            { new: true }
        );
        if (!tripPlan) {
            throw new Error('Trip plan not found');
        }
        return tripPlan;
    } catch (error) {
        throw new Error('Error updating trip plan: ' + error.message);
    }
};

/**
 * Delete a trip plan by ID.
 * @param {string} userId - The ID of the user.
 * @param {string} tripId - The ID of the trip plan.
 * @param {boolean} useMockData - Whether to use mock data
 * @returns {Promise<void>}
 */
export const deleteTripPlan = async (userId, tripId, useMockData = false) => {
    try {
        if (useMockData) {
            const index = mockTripPlans.findIndex(t => t.tripId === tripId && t.userId === userId);
            if (index === -1) {
                throw new Error('Trip plan not found');
            }
            mockTripPlans.splice(index, 1);
            return;
        }
        
        const result = await TripPlan.deleteOne({ _id: tripId, userId });
        if (result.deletedCount === 0) {
            throw new Error('Trip plan not found');
        }
    } catch (error) {
        throw new Error('Error deleting trip plan: ' + error.message);
    }
};