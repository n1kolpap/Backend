import TripPlan from '../models/TripPlan.js';
import User from '../models/User.js';
import { handleError } from '../utils/responses.js';

/**
 * Create a new trip plan
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export const createTripPlan = async (req, res) => {
    try {
        const { userId } = req.params;
        const tripPlanData = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const tripPlan = new TripPlan({ ...tripPlanData, userId });
        await tripPlan.save();

        return res.status(201).json({ success: true, data: tripPlan });
    } catch (error) {
        handleError(res, error);
    }
};

/**
 * Get trip plan by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export const getTripPlan = async (req, res) => {
    try {
        const { userId, tripId } = req.params;

        const tripPlan = await TripPlan.findOne({ _id: tripId, userId });
        if (!tripPlan) {
            return res.status(404).json({ success: false, message: 'Trip plan not found' });
        }

        return res.status(200).json({ success: true, data: tripPlan });
    } catch (error) {
        handleError(res, error);
    }
};

/**
 * Update trip plan by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export const updateTripPlan = async (req, res) => {
    try {
        const { userId, tripId } = req.params;
        const updatedData = req.body;

        const tripPlan = await TripPlan.findOneAndUpdate({ _id: tripId, userId }, updatedData, { new: true });
        if (!tripPlan) {
            return res.status(404).json({ success: false, message: 'Trip plan not found' });
        }

        return res.status(200).json({ success: true, data: tripPlan });
    } catch (error) {
        handleError(res, error);
    }
};

/**
 * Delete trip plan by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export const deleteTripPlan = async (req, res) => {
    try {
        const { userId, tripId } = req.params;

        const tripPlan = await TripPlan.findOneAndDelete({ _id: tripId, userId });
        if (!tripPlan) {
            return res.status(404).json({ success: false, message: 'Trip plan not found' });
        }

        return res.status(204).json({ success: true, message: 'Trip plan deleted' });
    } catch (error) {
        handleError(res, error);
    }
};