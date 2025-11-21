const mongoose = require('mongoose');

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
  date: {
    type: String,
    required: true,
    format: 'date',
  },
  activities: [activitySchema],
});

const DailyPlan = mongoose.model('DailyPlan', dailyPlanSchema);

module.exports = DailyPlan;