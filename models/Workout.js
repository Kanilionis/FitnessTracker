const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  totalDuration: {
    type: Number
  },
  numExercises: {
    type: Number
  }, 
  totalWeight: {
    type: Number
  },
  totalSets: {
    type: Number
  },
  totalReps: {
    type: Number
  },
  totalDistance: {
    type: Number
  }
})
;

// WorkoutSchema.methods

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
