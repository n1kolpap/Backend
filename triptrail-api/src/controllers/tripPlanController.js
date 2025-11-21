import TripPlan from '../models/TripPlan.js';
import User from '../models/User.js';
import { handleResponse } from '../utils/responses.js';

/**
 * Create a new trip plan
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const createTripPlan = async (req, res) => {
    try {
        const { userId } = req.params;
        const tripPlanData = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return handleResponse(res, 404, null, 'User not found');
        }

        const tripPlan = new TripPlan({ ...tripPlanData, userId });
        await tripPlan.save();

        return handleResponse(res, 201, tripPlan, 'Trip plan created successfully');
    } catch (error) {
        return handleResponse(res, 400, null, error.message);
    }
};

/**
 * Get trip plan by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getTripPlan = async (req, res) => {
    try {
        const { userId, tripId } = req.params;

        const tripPlan = await TripPlan.findOne({ _id: tripId, userId });
        if (!tripPlan) {
            return handleResponse(res, 404, null, 'Trip plan not found');
        }

        return handleResponse(res, 200, tripPlan, 'Trip plan retrieved successfully');
    } catch (error) {
        return handleResponse(res, 400, null, error.message);
    }
};

/**
 * Update trip plan by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const updateTripPlan = async (req, res) => {
    try {
        const { userId, tripId } = req.params;
        const updatedData = req.body;

        const tripPlan = await TripPlan.findOneAndUpdate({ _id: tripId, userId }, updatedData, { new: true });
        if (!tripPlan) {
            return handleResponse(res, 404, null, 'Trip plan not found');
        }

        return handleResponse(res, 200, tripPlan, 'Trip plan updated successfully');
    } catch (error) {
        return handleResponse(res, 400, null, error.message);
    }
};

/**
 * Delete trip plan
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const deleteTripPlan = async (req, res) => {
    try {
        const { userId, tripId } = req.params;

        const tripPlan = await TripPlan.findOneAndDelete({ _id: tripId, userId });
        if (!tripPlan) {
            return handleResponse(res, 404, null, 'Trip plan not found');
        }

        return handleResponse(res, 204, null, 'Trip plan deleted successfully');
    } catch (error) {
        return handleResponse(res, 400, null, error.message);
    }
};