const successResponse = (res, data, message = 'Operation successful') => {
    return res.status(200).json({
        success: true,
        data,
        message,
        error: null,
    });
};

const createdResponse = (res, data, message = 'Resource created successfully') => {
    return res.status(201).json({
        success: true,
        data,
        message,
        error: null,
    });
};

const errorResponse = (res, error, message = 'Operation failed') => {
    return res.status(400).json({
        success: false,
        data: null,
        message,
        error,
    });
};

const notFoundResponse = (res, message = 'Resource not found') => {
    return res.status(404).json({
        success: false,
        data: null,
        message,
        error: null,
    });
};

const serverErrorResponse = (res, message = 'Internal server error') => {
    return res.status(500).json({
        success: false,
        data: null,
        message,
        error: null,
    });
};

export {
    successResponse,
    createdResponse,
    errorResponse,
    notFoundResponse,
    serverErrorResponse,
};