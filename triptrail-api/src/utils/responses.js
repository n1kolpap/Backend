
export const successResponse = (res, data, message = "Operation successful") => {
    return res.status(200).json({
        success: true,
        data,
        message,
    });
};

export const createdResponse = (res, data, message = "Resource created") => {
    return res.status(201).json({
        success: true,
        data,
        message,
    });
};

export const errorResponse = (res, error, message = "Operation failed") => {
    return res.status(400).json({
        success: false,
        error,
        message,
    });
};

export const notFoundResponse = (res, message = "Resource not found") => {
    return res.status(404).json({
        success: false,
        message,
    });
};

export const deleteResponse = (res, message = "Resource deleted") => {
    return res.status(204).json({
        success: true,
        message,
    });
};

export const handleError = (res, error, statusCode = 500, message = "Internal Server Error") => {
    return res.status(statusCode).json({
        success: false,
        error: process.env.NODE_ENV === 'development' ? error.message : message,
        message,
    });
};

export const handleResponse = (res, data, statusCode = 200, message = "Success") => {
    return res.status(statusCode).json({
        success: true,
        data,
        message,
    });
};