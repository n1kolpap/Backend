// File: /TripTrail/TripTrail/services/userService.js

import User from '../models/User.js';
import { hashPassword, comparePassword } from '../utils/helpers.js';

/**
 * Create a new user in the database.
 * @param {Object} userData - The user data to create a new user.
 * @returns {Promise<Object>} - The created user object.
 */
export const createUser = async (userData) => {
    try {
        const hashedPassword = await hashPassword(userData.password);
        const user = new User({ ...userData, password: hashedPassword });
        await user.save();
        return user;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
};

/**
 * Authenticate a user by comparing the provided password with the stored hashed password.
 * @param {string} email - The email of the user.
 * @param {string} password - The password provided by the user.
 * @returns {Promise<Object>} - The authenticated user object.
 */
export const authenticateUser = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid password');
        }
        return user;
    } catch (error) {
        throw new Error('Error authenticating user: ' + error.message);
    }
};

/**
 * Find a user by their ID.
 * @param {string} userId - The ID of the user to find.
 * @returns {Promise<Object>} - The found user object.
 */
export const findUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Error finding user: ' + error.message);
    }
};