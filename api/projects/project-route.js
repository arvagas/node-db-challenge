const express = require('express')

const Projects = require('./project-model')

const router = express.Router()

// @@@@@@@@@@ GET request @@@@@@@@@@
router.get('/', (req, res) => {
  Projects.find()
    .then(projs => res.json(projs))
    .catch(err => res.status(500).json({ message: 'error retrieving all porjects' }))
})

// @@@@@@@@@@ POST request @@@@@@@@@@
router.post('/', (req, res) => {
  const newProj = req.body

  Projects.add(newProj)
    .then(projs => res.json(projs))
    .catch(err => res.status(500).json({ message: 'error retrieving all projects' }))
})

module.exports = router