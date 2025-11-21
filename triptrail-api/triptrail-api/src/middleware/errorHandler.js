const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    
    const statusCode = err.statusCode || 500;
    const response = {
        success: false,
        error: {
            message: err.message || 'Internal Server Error',
            status: statusCode,
        },
    };

    res.status(statusCode).json(response);
};

export default errorHandler;