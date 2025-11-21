import * as dailyPlanService from '../services/dailyPlanService.js';
import { handleError, successResponse } from '../utils/responses.js';

/**
 * @desc View daily plans for a specific trip
 * @route GET /user/{userId}/tripPlan/{tripId}/dailyPlan
 * @param {string} userId - User ID
 * @param {string} tripId - Trip ID
 * @returns {object} - Daily plan data
 */
export const viewDailyPlan = async (req, res) => {
    try {
        const { userId, tripId } = req.params;
        const useMockData = req.app.get('useMockData');

        const dailyPlans = await dailyPlanService.getDailyPlans(userId, tripId, useMockData);
        return successResponse(res, 200, dailyPlans, 'Daily plans retrieved successfully');
    } catch (error) {
        return handleError(res, error);
    }
};

/**
 * @desc Create a daily plan
 * @route POST /user/{userId}/tripPlan/{tripId}/dailyPlan
 * @param {string} userId - User ID
 * @param {string} tripId - Trip ID
 * @returns {object} - Created daily plan
 */
export const createDailyPlan = async (req, res) => {
    try {
        const { userId, tripId } = req.params;
        const dailyPlanData = req.body;
        const useMockData = req.app.get('useMockData');

        const dailyPlan = await dailyPlanService.createDailyPlan(userId, tripId, dailyPlanData, useMockData);
        return successResponse(res, 201, dailyPlan, 'Daily plan created successfully');
    } catch (error) {
        return handleError(res, error);
    }
};

/**
 * @desc Update a daily plan
 * @route PUT /user/{userId}/tripPlan/{tripId}/dailyPlan/{date}
 * @param {string} userId - User ID
 * @param {string} tripId - Trip ID
 * @param {string} date - Date of the daily plan
 * @returns {object} - Updated daily plan
 */
export const updateDailyPlan = async (req, res) => {
    try {
        const { userId, tripId, date } = req.params;
        const updates = req.body;
        const useMockData = req.app.get('useMockData');

        const dailyPlan = await dailyPlanService.updateDailyPlan(userId, tripId, date, updates, useMockData);
        return successResponse(res, 200, dailyPlan, 'Daily plan updated successfully');
    } catch (error) {
        return handleError(res, error);
    }
};

/**
 * @desc Delete a daily plan
 * @route DELETE /user/{userId}/tripPlan/{tripId}/dailyPlan/{date}
 * @param {string} userId - User ID
 * @param {string} tripId - Trip ID
 * @param {string} date - Date of the daily plan
 * @returns {object} - Confirmation message
 */
export const deleteDailyPlan = async (req, res) => {
    try {
        const { userId, tripId, date } = req.params;
        const useMockData = req.app.get('useMockData');

        await dailyPlanService.deleteDailyPlan(userId, tripId, date, useMockData);
        return successResponse(res, 200, null, 'Daily plan deleted successfully');
    } catch (error) {
        return handleError(res, error);
    }
};