const express = require('express')

const Tasks = require('./task-model')
const mw = require('./task-middleware')

const router = express.Router()

// @@@@@@@@@@ GET request @@@@@@@@@@
router.get('/', (req, res) => {
  Tasks.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(500).json({ message: 'error retrieving all tasks' }))
})

// @@@@@@@@@@ POST request @@@@@@@@@@
router.post('/', mw.validateProjId, (req, res) => {
  const newTask = req.body

  Tasks.add(newTask)
    .then(task => res.json(task))
    .catch(err => res.status(500).json({ message: 'error adding task' }))
})

module.exports = router