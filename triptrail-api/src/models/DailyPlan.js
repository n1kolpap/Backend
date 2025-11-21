import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  activityId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const dailyPlanSchema = new mongoose.Schema({
  tripId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  activities: [activitySchema],
});

const DailyPlan = mongoose.model('DailyPlan', dailyPlanSchema);

export default DailyPlan;