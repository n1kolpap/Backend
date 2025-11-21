const { body, param } = require('express-validator');

// Validation for User creation
const validateUserCreation = [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Validation for User login
const validateUserLogin = [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').notEmpty().withMessage('Password is required'),
];

// Validation for TripPlan creation
const validateTripPlanCreation = [
  body('origin').notEmpty().withMessage('Origin is required'),
  body('destination').notEmpty().withMessage('Destination is required'),
  body('startDate').isISO8601().withMessage('Start date must be a valid date'),
  body('endDate').isISO8601().withMessage('End date must be a valid date'),
  body('budget').isNumeric().withMessage('Budget must be a number'),
];

// Validation for TripPlan update
const validateTripPlanUpdate = [
  param('tripId').notEmpty().withMessage('Trip ID is required'),
  body('origin').optional().notEmpty().withMessage('Origin is required if provided'),
  body('destination').optional().notEmpty().withMessage('Destination is required if provided'),
  body('startDate').optional().isISO8601().withMessage('Start date must be a valid date'),
  body('endDate').optional().isISO8601().withMessage('End date must be a valid date'),
  body('budget').optional().isNumeric().withMessage('Budget must be a number'),
];

// Validation for DailyPlan activities
const validateDailyPlanActivity = [
  param('tripId').notEmpty().withMessage('Trip ID is required'),
  body('activities').isArray().withMessage('Activities must be an array'),
];

// Exporting validation middleware
module.exports = {
  validateUserCreation,
  validateUserLogin,
  validateTripPlanCreation,
  validateTripPlanUpdate,
  validateDailyPlanActivity,
};