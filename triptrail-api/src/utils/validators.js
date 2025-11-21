export const validateUserInput = (data) => {
    const errors = {};
    if (!data.username || typeof data.username !== 'string') {
        errors.username = 'Username is required and must be a string.';
    }
    if (!data.password || typeof data.password !== 'string') {
        errors.password = 'Password is required and must be a string.';
    }
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'A valid email is required.';
    }
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

export const validateTripPlanInput = (data) => {
    const errors = {};
    if (!data.origin || typeof data.origin !== 'string') {
        errors.origin = 'Origin is required and must be a string.';
    }
    if (!data.destination || typeof data.destination !== 'string') {
        errors.destination = 'Destination is required and must be a string.';
    }
    if (!data.startDate || !/\d{4}-\d{2}-\d{2}/.test(data.startDate)) {
        errors.startDate = 'Start date is required and must be in YYYY-MM-DD format.';
    }
    if (!data.endDate || !/\d{4}-\d{2}-\d{2}/.test(data.endDate)) {
        errors.endDate = 'End date is required and must be in YYYY-MM-DD format.';
    }
    if (data.budget !== undefined && typeof data.budget !== 'number') {
        errors.budget = 'Budget must be a number.';
    }
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

export const validateActivityInput = (data) => {
    const errors = {};
    if (!data.name || typeof data.name !== 'string') {
        errors.name = 'Activity name is required and must be a string.';
    }
    if (!data.day || typeof data.day !== 'string') {
        errors.day = 'Day is required and must be a string.';
    }
    if (!data.time || typeof data.time !== 'string') {
        errors.time = 'Time is required and must be a string.';
    }
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};