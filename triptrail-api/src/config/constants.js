module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/triptrail',
  PORT: process.env.PORT || 3000,
  DEFAULT_BUDGET: 1000,
  DEFAULT_ACTIVITY_TIME: '09:00',
};