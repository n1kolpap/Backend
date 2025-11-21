import { body, param } from 'express-validator';

// Validation middleware for User
export const validateUser = [
  body('username').isString().notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isString().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Validation middleware for TripPlan
export const validateTripPlan = [
  body('origin').isString().notEmpty().withMessage('Origin is required'),
  body('destination').isString().notEmpty().withMessage('Destination is required'),
  body('startDate').isISO8601().withMessage('Start date must be a valid date'),
  body('endDate').isISO8601().withMessage('End date must be a valid date'),
  body('budget').isFloat({ gt: 0 }).withMessage('Budget must be a positive number'),
];

// Validation middleware for DailyPlan
export const validateDailyPlan = [
  param('userId').isString().notEmpty().withMessage('User ID is required'),
  param('tripId').isString().notEmpty().withMessage('Trip ID is required'),
];

// Validation middleware for Activity
export const validateActivity = [
  body('name').isString().notEmpty().withMessage('Activity name is required'),
  body('day').isString().notEmpty().withMessage('Day is required'),
  body('time').isString().notEmpty().withMessage('Time is required'),
];