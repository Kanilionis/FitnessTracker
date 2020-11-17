const express = require('express')
const app = express()

// const db = require('../models/Workout')
const Workout = require('../models/Workout')

app.post("/api/workouts", function({ body }, res){
  Workout.create(body).then(dbWorkout => {
    res.json(dbWorkout)
  }).catch(err => {
    res.json(err)
  })
})

app.get("/api/workouts", function(req, res) {
  Workout.find({})
    .then(function(dbWorkout) {
      res.json(dbWorkout);
    });
});


// Export app
module.exports = (app)