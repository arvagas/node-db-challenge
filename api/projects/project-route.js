const express = require('express')

const Projects = require('./project-model')

const router = express.Router()

// @@@@@@@@@@ GET request @@@@@@@@@@
router.get('/', (req, res) => {
  Projects.find()
    .then(projs => res.json(projs))
    .catch(err => res.status(500).json({ message: 'error retrieving all projects' }))
})

// stretch
router.get('/:id', (req, res) => {
  const { id } = req.params

  Projects.findByIdVerbose(id)
    .then(proj => res.json(proj))
    .catch(err => res.status(500).json({ message: 'error retrieving project' }))
})

// @@@@@@@@@@ POST request @@@@@@@@@@
router.post('/', (req, res) => {
  const newProj = req.body

  Projects.add(newProj)
    .then(proj => res.json(proj))
    .catch(err => res.status(500).json({ message: 'error adding project' }))
})

module.exports = router