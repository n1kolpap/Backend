module.exports = {
  successResponse: (res, data, message = 'Operation successful') => {
    return res.status(200).json({
      success: true,
      data,
      message,
    });
  },

  createdResponse: (res, data, message = 'Resource created successfully') => {
    return res.status(201).json({
      success: true,
      data,
      message,
    });
  },

  errorResponse: (res, error, message = 'An error occurred') => {
    return res.status(500).json({
      success: false,
      error,
      message,
    });
  },

  notFoundResponse: (res, message = 'Resource not found') => {
    return res.status(404).json({
      success: false,
      message,
    });
  },

  validationErrorResponse: (res, errors) => {
    return res.status(400).json({
      success: false,
      errors,
      message: 'Validation error',
    });
  },
};