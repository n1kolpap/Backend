import TripPlan from '../models/TripPlan.js';
import User from '../models/User.js';
import DailyPlan from '../models/DailyPlan.js';
import Activity from '../models/Activity.js';

/**
 * Create a new trip plan for a user.
 * @param {string} userId - The ID of the user creating the trip plan.
 * @param {Object} tripPlanData - The trip plan details.
 * @returns {Promise<Object>} - The created trip plan.
 */
export const createTripPlan = async (userId, tripPlanData) => {
    try {
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
 * @returns {Promise<Object>} - The trip plan.
 */
export const getTripPlanById = async (userId, tripId) => {
    try {
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
 * @param {Object} updateData - The updated trip plan details.
 * @returns {Promise<Object>} - The updated trip plan.
 */
export const updateTripPlan = async (userId, tripId, updateData) => {
    try {
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
 * @returns {Promise<void>}
 */
export const deleteTripPlan = async (userId, tripId) => {
    try {
        const result = await TripPlan.deleteOne({ _id: tripId, userId });
        if (result.deletedCount === 0) {
            throw new Error('Trip plan not found');
        }
    } catch (error) {
        throw new Error('Error deleting trip plan: ' + error.message);
    }
};

/**
 * Add an activity to a trip plan.
 * @param {string} tripId - The ID of the trip plan.
 * @param {Object} activityData - The activity details.
 * @returns {Promise<Activity>} - The created activity.
 */
export const addActivityToTripPlan = async (tripId, activityData) => {
    try {
        const activity = new Activity(activityData);
        await activity.save();
        const tripPlan = await TripPlan.findById(tripId);
        tripPlan.activities.push(activity._id);
        await tripPlan.save();
        return activity;
    } catch (error) {
        throw new Error('Error adding activity to trip plan: ' + error.message);
    }
};

/**
 * Remove an activity from a trip plan.
 * @param {string} tripId - The ID of the trip plan.
 * @param {string} activityId - The ID of the activity.
 * @returns {Promise<void>}
 */
export const removeActivityFromTripPlan = async (tripId, activityId) => {
    try {
        const tripPlan = await TripPlan.findById(tripId);
        tripPlan.activities = tripPlan.activities.filter(id => id.toString() !== activityId);
        await tripPlan.save();
        await Activity.findByIdAndDelete(activityId);
    } catch (error) {
        throw new Error('Error removing activity from trip plan: ' + error.message);
    }
};