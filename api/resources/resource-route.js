const express = require('express')

const Resources = require('./resource-model')

const router = express.Router()

// @@@@@@@@@@ GET request @@@@@@@@@@
router.get('/', (req, res) => {
  Resources.find()
    .then(resources => res.json(resources))
    .catch(err => res.status(500).json({ message: 'error retrieving all resources' }))
})

// @@@@@@@@@@ POST request @@@@@@@@@@
router.post('/', (req, res) => {
  const newRes = req.body

  Resources.add(newRes)
    .then(resource => res.json(resource))
    .catch(err => res.status(500).json({ message: 'error adding resource' }))
})

module.exports = router