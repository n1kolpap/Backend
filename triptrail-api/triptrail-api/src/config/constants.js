const ERROR_MESSAGES = {
    USER_NOT_FOUND: "User not found.",
    INVALID_CREDENTIALS: "Invalid username or password.",
    TRIP_PLAN_NOT_FOUND: "Trip plan not found.",
    DAILY_PLAN_NOT_FOUND: "Daily plan not found.",
    ACTIVITY_NOT_FOUND: "Activity not found.",
    INVALID_INPUT: "Invalid input provided.",
    UNAUTHORIZED_ACCESS: "Unauthorized access.",
    TRIP_PLAN_DELETED: "Trip plan successfully deleted.",
    ACTIVITY_ADDED: "Activity successfully added.",
    ACTIVITY_REMOVED: "Activity successfully removed."
};

const STATUS_CODES = {
    SUCCESS: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

module.exports = {
    ERROR_MESSAGES,
    STATUS_CODES
};