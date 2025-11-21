import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { constants } from '../config/constants.js';

const verifyToken = promisify(jwt.verify);

/**
 * Middleware to authenticate users based on JWT token.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'No token provided, authorization denied.'
            });
        }

        const decoded = await verifyToken(token, constants.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Token is not valid.'
        });
    }
};