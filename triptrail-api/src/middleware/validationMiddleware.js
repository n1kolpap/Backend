import { body, param } from 'express-validator';

// Middleware for validating user input
export const validateUser = [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Email is not valid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Middleware for validating trip plan input
export const validateTripPlan = [
  body('origin').notEmpty().withMessage('Origin is required'),
  body('destination').notEmpty().withMessage('Destination is required'),
  body('startDate').isISO8601().withMessage('Start date must be a valid date'),
  body('endDate').isISO8601().withMessage('End date must be a valid date'),
  body('budget').isNumeric().withMessage('Budget must be a number'),
];

// Middleware for validating daily plan input
export const validateDailyPlan = [
  param('tripId').notEmpty().withMessage('Trip ID is required'),
  body('date').isISO8601().withMessage('Date must be a valid date'),
];

// Middleware for validating activity input
export const validateActivity = [
  param('tripId').notEmpty().withMessage('Trip ID is required'),
  body('name').notEmpty().withMessage('Activity name is required'),
  body('time').notEmpty().withMessage('Activity time is required'),
];