// controllers/tripPlanController.js

import TripPlan from '../models/TripPlan.js';
import User from '../models/User.js';
import { successResponse, errorResponse } from '../utils/responses.js';

// Create a new trip plan
export const createTripPlan = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const tripPlanData = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return errorResponse(res, 404, 'User not found');
        }

        const tripPlan = new TripPlan({ ...tripPlanData, userId });
        await tripPlan.save();

        return successResponse(res, 201, tripPlan, 'Trip plan created successfully');
    } catch (error) {
        next(error);
    }
};

// Get trip plan by ID
export const getTripPlan = async (req, res, next) => {
    try {
        const { userId, tripId } = req.params;

        const tripPlan = await TripPlan.findOne({ _id: tripId, userId });
        if (!tripPlan) {
            return errorResponse(res, 404, 'Trip plan not found');
        }

        return successResponse(res, 200, tripPlan, 'Trip plan retrieved successfully');
    } catch (error) {
        next(error);
    }
};

// Update trip plan by ID
export const updateTripPlan = async (req, res, next) => {
    try {
        const { userId, tripId } = req.params;
        const tripPlanData = req.body;

        const tripPlan = await TripPlan.findOneAndUpdate({ _id: tripId, userId }, tripPlanData, { new: true });
        if (!tripPlan) {
            return errorResponse(res, 404, 'Trip plan not found');
        }

        return successResponse(res, 200, tripPlan, 'Trip plan updated successfully');
    } catch (error) {
        next(error);
    }
};

// Delete trip plan
export const deleteTripPlan = async (req, res, next) => {
    try {
        const { userId, tripId } = req.params;

        const tripPlan = await TripPlan.findOneAndDelete({ _id: tripId, userId });
        if (!tripPlan) {
            return errorResponse(res, 404, 'Trip plan not found');
        }

        return successResponse(res, 204, null, 'Trip plan deleted successfully');
    } catch (error) {
        next(error);
    }
};