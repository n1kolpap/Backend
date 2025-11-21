import User from '../models/User.js';
import { createUser, authenticateUser } from '../services/userService.js';
import { handleError } from '../utils/responses.js';

/**
 * Sign up a new user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const signUp = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        handleError(res, error);
    }
};

/**
 * Log in a user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const logIn = async (req, res) => {
    try {
        const user = await authenticateUser(req.body);
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        handleError(res, error);
    }
};