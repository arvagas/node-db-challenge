const db = require('../../data/db-config')

module.exports = {
  find,
  findById,
  add,
}

function find() {
  return db('projects')
    .then(projects => {
      const convert = []

      projects.forEach(proj => {
        proj.completed === 1 ? proj.completed = true : proj.completed = false
        convert.push(proj)
      })

      return convert
    })
}

function findById(id) {
  return db('projects')
    .where({ id })
    .first()
    .then(proj => {
      proj.completed === 1 ? proj.completed = true : proj.completed = false
      return proj
    })
}

function add(obj) {
  return db('projects')
    .insert(obj, 'id')
    .then(idArr => findById(idArr[0]))
}