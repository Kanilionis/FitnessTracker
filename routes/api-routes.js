const express = require('express')
const app = express()

// const db = require('../models/Workout')
const Workout = require('../models/Workout')

app.post("/api/workouts", function(req, res){
  Workout.create({}).then(dbWorkout => {
    res.json(dbWorkout)
  }).catch(err => {
    res.json(err)
  })
})

app.get("/api/workouts", function(req, res) {
  Workout.find()
    .then(function(dbWorkout) {
      res.json(dbWorkout);
    }).catch(err => {
      res.json(err)
    })
    ;
});

app.get("/api/workouts/range", function(req, res) {
  // get last 7 workouts
  Workout.find().limit(7)
    .then(function(dbWorkout) {
      res.json(dbWorkout);
    }).catch(err => {
      res.json(err)
    })
    ;
});

app.put("/api/workouts/:id", function(req, res){
  Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true, runValidators: true}) // will check that new update meets requirements from model
  .then(function(dbWorkout) {
    res.json(dbWorkout);
  }).catch(err => {
    res.json(err)
  })
});

app.delete("/api/workouts", function({ body }, res){
  Workout.findByIdAndDelete(body.id).then(function(){
    res.json(true)
  }).catch(err => {
    res.json(err)
  })
})




// Export app
module.exports = (app)