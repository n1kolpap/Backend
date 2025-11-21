import { createUser, authenticateUser } from '../services/userService.js';
import { handleError, successResponse } from '../utils/responses.js';

/**
 * Sign up a new user
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export const signUp = async (req, res) => {
    try {
        const useMockData = req.app.get('useMockData');
        const user = await createUser(req.body, useMockData);
        return successResponse(res, 201, user, 'User created successfully');
    } catch (error) {
        return handleError(res, error);
    }
};

/**
 * Log in a user
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export const logIn = async (req, res) => {
    try {
        const useMockData = req.app.get('useMockData');
        const userData = await authenticateUser(req.body, useMockData);
        return successResponse(res, 200, userData, 'User logged in successfully');
    } catch (error) {
        return handleError(res, error);
    }
};