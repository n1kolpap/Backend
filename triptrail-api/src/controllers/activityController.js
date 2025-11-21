import DailyPlan from '../models/DailyPlan.js';
import { mockDailyPlans } from '../config/mockData.js';
import { handleError, successResponse } from '../utils/responses.js';
import { generateUniqueId } from '../utils/helpers.js';

/**
 * Add an activity to the daily plan.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const addActivityToDailyPlan = async (req, res) => {
    try {
        const { userId, tripId, date } = req.params;
        const activityData = req.body;
        const useMockData = req.app.get('useMockData');

        if (useMockData) {
            const dailyPlan = mockDailyPlans.find(d => d.tripId === tripId && d.date === date);
            if (!dailyPlan) {
                // Create new daily plan if not exists
                const newDailyPlan = {
                    tripId,
                    date,
                    activities: [{
                        activityId: generateUniqueId(),
                        ...activityData
                    }]
                };
                mockDailyPlans.push(newDailyPlan);
                return successResponse(res, 201, newDailyPlan, 'Activity added successfully');
            }
            
            const newActivity = {
                activityId: generateUniqueId(),
                ...activityData
            };
            dailyPlan.activities.push(newActivity);
            return successResponse(res, 201, dailyPlan, 'Activity added successfully');
        }

        const dailyPlan = await DailyPlan.findOneAndUpdate(
            { tripId, date },
            { $push: { activities: { activityId: generateUniqueId(), ...activityData } } },
            { new: true, upsert: true }
        );

        return successResponse(res, 201, dailyPlan, 'Activity added successfully');
    } catch (error) {
        return handleError(res, error);
    }
};

/**
 * Remove an activity from the daily plan.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const removeActivityFromDailyPlan = async (req, res) => {
    try {
        const { userId, tripId, date, activityId } = req.params;
        const useMockData = req.app.get('useMockData');

        if (useMockData) {
            const dailyPlan = mockDailyPlans.find(d => d.tripId === tripId && d.date === date);
            if (!dailyPlan) {
                throw new Error('Daily plan not found');
            }
            
            const activityIndex = dailyPlan.activities.findIndex(a => a.activityId === activityId);
            if (activityIndex === -1) {
                throw new Error('Activity not found');
            }
            
            dailyPlan.activities.splice(activityIndex, 1);
            return successResponse(res, 200, dailyPlan, 'Activity removed successfully');
        }

        const dailyPlan = await DailyPlan.findOneAndUpdate(
            { tripId, date },
            { $pull: { activities: { activityId } } },
            { new: true }
        );

        if (!dailyPlan) {
            throw new Error('Daily plan not found');
        }

        return successResponse(res, 200, dailyPlan, 'Activity removed successfully');
    } catch (error) {
        return handleError(res, error);
    }
};