const db = require('../../data/db-config')

module.exports = {
  find,
  findById,
  add,
}

function find() {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('t.id', 't.description', 't.notes', 't.completed', 'p.name as project_name', 'p.description as project_description')
    .then(tasks => {
      const convert = []

      tasks.forEach(task => {
        task.completed === 1 ? task.completed = true : task.completed = false
        convert.push(task)
      })

      return convert
    })
}

function findById(id) {
  return db('tasks as t')
    .where({ id })
    .first()
    .then(task => {
      task.completed === 1 ? task.completed = true : task.completed = false
      return task
    })
}

function add(obj) {
  return db('tasks')
    .insert(obj, 'id')
    .then(idArr => findById(idArr[0]))
}