/**
 * Standard success response format
 * @param {Object} res - Express response object
 * @param {number} statusCode - HTTP status code
 * @param {*} data - Response data
 * @param {string} message - Success message
 * @returns {Object} JSON response
 */
export const successResponse = (res, statusCode = 200, data, message = "Operation successful") => {
    return res.status(statusCode).json({
        success: true,
        data,
        message,
    });
};

/**
 * Standard error response format
 * @param {Object} res - Express response object
 * @param {number} statusCode - HTTP status code
 * @param {string} message - Error message
 * @param {*} error - Error details (optional)
 * @returns {Object} JSON response
 */
export const errorResponse = (res, statusCode = 400, message = "Operation failed", error = null) => {
    return res.status(statusCode).json({
        success: false,
        message,
        error: error || undefined,
    });
};

/**
 * Handle response with standard format
 * @param {Object} res - Express response object
 * @param {number} statusCode - HTTP status code
 * @param {*} data - Response data
 * @param {string} message - Response message
 * @returns {Object} JSON response
 */
export const handleResponse = (res, statusCode, data, message) => {
    const success = statusCode >= 200 && statusCode < 300;
    return res.status(statusCode).json({
        success,
        data: success ? data : undefined,
        error: !success ? message : undefined,
        message,
    });
};

/**
 * Handle error with standard format
 * @param {Object} res - Express response object
 * @param {Error} error - Error object
 * @returns {Object} JSON response
 */
export const handleError = (res, error) => {
    const statusCode = error.statusCode || 500;
    return res.status(statusCode).json({
        success: false,
        message: error.message || 'Internal Server Error',
        error: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
};

/**
 * Handle success with standard format
 * @param {Object} res - Express response object
 * @param {number} statusCode - HTTP status code
 * @param {*} data - Response data
 * @param {string} message - Success message
 * @returns {Object} JSON response
 */
export const handleSuccess = (res, statusCode = 200, data, message = 'Operation successful') => {
    return res.status(statusCode).json({
        success: true,
        data,
        message,
    });
};