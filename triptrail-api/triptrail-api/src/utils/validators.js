import { body, validationResult } from 'express-validator';

/**
 * Validate user input for creating a new user
 */
export const validateUser = [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Email is not valid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

/**
 * Validate user input for logging in
 */
export const validateLogin = [
  body('email').isEmail().withMessage('Email is not valid'),
  body('password').notEmpty().withMessage('Password is required'),
];

/**
 * Validate trip plan input
 */
export const validateTripPlan = [
  body('origin').notEmpty().withMessage('Origin is required'),
  body('destination').notEmpty().withMessage('Destination is required'),
  body('startDate').isISO8601().withMessage('Start date must be a valid date'),
  body('endDate').isISO8601().withMessage('End date must be a valid date'),
  body('budget').isNumeric().withMessage('Budget must be a number'),
];

/**
 * Validate daily plan input
 */
export const validateDailyPlan = [
  body('date').isISO8601().withMessage('Date must be a valid date'),
  body('activities').isArray().withMessage('Activities must be an array'),
];

/**
 * Validate activity input
 */
export const validateActivity = [
  body('name').notEmpty().withMessage('Activity name is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('day').notEmpty().withMessage('Day is required'),
  body('time').notEmpty().withMessage('Time is required'),
];

/**
 * Middleware to handle validation errors
 */
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};