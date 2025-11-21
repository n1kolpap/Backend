import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants.js';
import { mockUsers } from '../config/mockData.js';

/**
 * Create a new user
 * @param {Object} userData - User data
 * @param {boolean} useMockData - Whether to use mock data
 * @returns {Promise<Object>} - Created user
 */
export const createUser = async (userData, useMockData = false) => {
    try {
        if (useMockData) {
            const newUser = {
                userId: mockUsers.length + 1 + '',
                username: userData.username,
                email: userData.email,
                password: await bcrypt.hash(userData.password, 10),
            };
            mockUsers.push(newUser);
            return { ...newUser, password: undefined };
        }
        
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = new User({ ...userData, password: hashedPassword });
        await user.save();
        return user;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
};

/**
 * Authenticate user
 * @param {Object} credentials - User credentials {email, password}
 * @param {boolean} useMockData - Whether to use mock data
 * @returns {Promise<Object>} - User data with token
 */
export const authenticateUser = async (credentials, useMockData = false) => {
    try {
        const { email, password } = credentials;
        
        if (useMockData) {
            const user = mockUsers.find(u => u.email === email);
            if (!user) {
                throw new Error('User not found');
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw new Error('Invalid credentials');
            }
            const token = jwt.sign({ id: user.userId, email: user.email }, JWT_SECRET, { expiresIn: '24h' });
            return {
                userId: user.userId,
                username: user.username,
                email: user.email,
                token,
            };
        }
        
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });
        return {
            userId: user._id,
            username: user.username,
            email: user.email,
            token,
        };
    } catch (error) {
        throw new Error('Error authenticating user: ' + error.message);
    }
};

/**
 * Get user by ID
 * @param {string} userId - User ID
 * @param {boolean} useMockData - Whether to use mock data
 * @returns {Promise<Object>} - User data
 */
export const getUserById = async (userId, useMockData = false) => {
    try {
        if (useMockData) {
            const user = mockUsers.find(u => u.userId === userId);
            if (!user) {
                throw new Error('User not found');
            }
            return { ...user, password: undefined };
        }
        
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Error fetching user: ' + error.message);
    }
};