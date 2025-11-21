import User from '../models/User.js';
import { createUser, loginUser } from '../services/userService.js';
import { successResponse, errorResponse } from '../utils/responses.js';

/**
 * @desc Create a new user
 * @route POST /user
 * @access Public
 */
export const signUp = async (req, res, next) => {
    try {
        const user = await createUser(req.body);
        successResponse(res, 201, user, 'User created successfully');
    } catch (error) {
        next(error);
    }
};

/**
 * @desc Log in a user
 * @route PUT /user/login
 * @access Public
 */
export const logIn = async (req, res, next) => {
    try {
        const user = await loginUser(req.body);
        successResponse(res, 200, user, 'User logged in successfully');
    } catch (error) {
        next(error);
    }
};