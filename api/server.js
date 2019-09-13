const express = require('express')

const projectRoute = require('./projects/project-route')
const resourceRoute = require('./resources/resource-route')
const taskRoute = require('./tasks/task-route')

const server = express()
server.use(express.json())

const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`)

  next()
}

// @@@@@@@@@@ Global MIddleware @@@@@@@@@@
server.use(logger)

// Route handling
server.use('/api/projects', projectRoute)
server.use('/api/resources', resourceRoute)
server.use('/api/tasks', taskRoute)

// Hello world test
server.get('/', (req, res) => {
  res.json('Hello from node-db-challenge!')
})

module.exports = server