import * as tripPlanService from '../services/tripPlanService.js';
import { handleResponse, handleError, successResponse } from '../utils/responses.js';

/**
 * Create a new trip plan
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const createTripPlan = async (req, res) => {
    try {
        const { userId } = req.params;
        const tripPlanData = req.body;
        const useMockData = req.app.get('useMockData');

        const tripPlan = await tripPlanService.createTripPlan(userId, tripPlanData, useMockData);
        return successResponse(res, 201, tripPlan, 'Trip plan created successfully');
    } catch (error) {
        return handleError(res, error);
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
        const useMockData = req.app.get('useMockData');

        const tripPlan = await tripPlanService.getTripPlanById(userId, tripId, useMockData);
        return successResponse(res, 200, tripPlan, 'Trip plan retrieved successfully');
    } catch (error) {
        return handleError(res, error);
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
        const useMockData = req.app.get('useMockData');

        const tripPlan = await tripPlanService.updateTripPlan(userId, tripId, updatedData, useMockData);
        return successResponse(res, 200, tripPlan, 'Trip plan updated successfully');
    } catch (error) {
        return handleError(res, error);
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
        const useMockData = req.app.get('useMockData');

        await tripPlanService.deleteTripPlan(userId, tripId, useMockData);
        return successResponse(res, 200, null, 'Trip plan deleted successfully');
    } catch (error) {
        return handleError(res, error);
    }
};