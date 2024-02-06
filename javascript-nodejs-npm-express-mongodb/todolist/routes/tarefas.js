const express = require('express');
const router = express.Router();

const Task = require('../src/models/tasks');

const path = require('path');

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.render('../src/views/index', {tasks});
})

router.post('/add', async(req, res) => {
  const taskDescription = req.body.task;
  const newTask = new Task({description: taskDescription, completed: false});
  await newTask.save();
  res.redirect('/');
})

module.exports = router;