// utils/validators.js

export const validateUserInput = (data) => {
    const errors = {};
    if (!data.username || data.username.trim() === '') {
        errors.username = 'Username is required';
    }
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Valid email is required';
    }
    if (!data.password || data.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

export const validateTripPlanInput = (data) => {
    const errors = {};
    if (!data.origin || data.origin.trim() === '') {
        errors.origin = 'Origin is required';
    }
    if (!data.destination || data.destination.trim() === '') {
        errors.destination = 'Destination is required';
    }
    if (!data.startDate || !/\d{4}-\d{2}-\d{2}/.test(data.startDate)) {
        errors.startDate = 'Valid start date is required';
    }
    if (!data.endDate || !/\d{4}-\d{2}-\d{2}/.test(data.endDate)) {
        errors.endDate = 'Valid end date is required';
    }
    if (data.budget < 0) {
        errors.budget = 'Budget must be a positive number';
    }
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

export const validateDailyPlanInput = (data) => {
    const errors = {};
    if (!data.date || !/\d{4}-\d{2}-\d{2}/.test(data.date)) {
        errors.date = 'Valid date is required';
    }
    if (!Array.isArray(data.activities)) {
        errors.activities = 'Activities must be an array';
    }
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};