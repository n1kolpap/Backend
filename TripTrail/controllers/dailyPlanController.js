// controllers/dailyPlanController.js

import DailyPlan from '../models/DailyPlan.js';
import TripPlan from '../models/TripPlan.js';
import { successResponse, errorResponse } from '../utils/responses.js';

// Create a new daily plan
export const createDailyPlan = async (req, res, next) => {
    try {
        const { userId, tripId } = req.params;
        const { date, activities } = req.body;

        const dailyPlan = new DailyPlan({ date, activities });
        await dailyPlan.save();

        const tripPlan = await TripPlan.findById(tripId);
        tripPlan.dailyPlans.push(dailyPlan._id);
        await tripPlan.save();

        return successResponse(res, 201, { dailyPlan }, 'Daily plan created successfully');
    } catch (error) {
        next(error);
    }
};

// Get daily plan by date
export const getDailyPlan = async (req, res, next) => {
    try {
        const { userId, tripId, date } = req.params;

        const dailyPlan = await DailyPlan.findOne({ date, tripId });
        if (!dailyPlan) {
            return errorResponse(res, 404, 'Daily plan not found');
        }

        return successResponse(res, 200, { dailyPlan }, 'Daily plan retrieved successfully');
    } catch (error) {
        next(error);
    }
};

// Update daily plan
export const updateDailyPlan = async (req, res, next) => {
    try {
        const { userId, tripId, date } = req.params;
        const { activities } = req.body;

        const dailyPlan = await DailyPlan.findOneAndUpdate({ date, tripId }, { activities }, { new: true });
        if (!dailyPlan) {
            return errorResponse(res, 404, 'Daily plan not found');
        }

        return successResponse(res, 200, { dailyPlan }, 'Daily plan updated successfully');
    } catch (error) {
        next(error);
    }
};

// Delete daily plan
export const deleteDailyPlan = async (req, res, next) => {
    try {
        const { userId, tripId, date } = req.params;

        const dailyPlan = await DailyPlan.findOneAndDelete({ date, tripId });
        if (!dailyPlan) {
            return errorResponse(res, 404, 'Daily plan not found');
        }

        return successResponse(res, 204, null, 'Daily plan deleted successfully');
    } catch (error) {
        next(error);
    }
};