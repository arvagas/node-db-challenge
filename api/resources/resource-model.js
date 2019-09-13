const db = require('../../data/db-config')

module.exports = {
  find,
  findById,
  add,
}

function find() {
  return db('resources')
    .then(res => res)
}

function findById(id) {
  return db('resources')
    .where({ id })
    .first()
    .then(res => res)
}

function add(obj) {
  return db('resources')
    .insert(obj, 'id')
    .then(idArr => findById(idArr[0]))
}