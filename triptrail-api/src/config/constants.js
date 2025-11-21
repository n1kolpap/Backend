export const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/triptrail';
export const PORT = process.env.PORT || 3000;
export const DEFAULT_BUDGET = 1000;
export const DEFAULT_ACTIVITY_TIME = '09:00';

export default {
  JWT_SECRET,
  MONGO_URI,
  PORT,
  DEFAULT_BUDGET,
  DEFAULT_ACTIVITY_TIME,
};