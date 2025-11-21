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

const tripPlanSchema = new mongoose.Schema({
  tripId: {
    type: String,
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  activities: [activitySchema],
});

const TripPlan = mongoose.model('TripPlan', tripPlanSchema);

module.exports = TripPlan;