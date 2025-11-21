module.exports = (err, req, res, next) => {
    console.error(err.stack);

    const statusCode = err.statusCode || 500;
    const response = {
        success: false,
        message: err.message || 'Internal Server Error',
        error: process.env.NODE_ENV === 'production' ? {} : err,
    };

    res.status(statusCode).json(response);
};