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
    required: false,
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

const Activity = mongoose.model('Activity', activitySchema);

export default Activity;