const db = require('../../data/db-config')

module.exports = {
  find,
  findById,
  findByIdVerbose,
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

// stretch
function findProjTasks(id) {
  return db('tasks')
    .select('id', 'description', 'notes', 'completed')
    .where({ project_id: id })
    .then(tasks => {
      const convert = []

      tasks.forEach(task => {
        task.completed === 1 ? task.completed = true : task.completed = false
        convert.push(task)
      })

      return convert
    })
}

function findProjResources(id) {
  return db('resources as r')
    .join('projects_resources as pr', 'r.id', 'pr.resource_id')
    .join('projects as p', 'p.id', 'pr.project_id')
    .select('r.id', 'r.name', 'r.description')
    .where({ 'pr.project_id': id })
    .then(resources => resources)
}


function findByIdVerbose(id) {
  const tasks = findProjTasks(id)
  const resources = findProjResources(id)

  return db('projects')
    .where({ id })
    .first()
    .then(proj => {
      proj.completed === 1 ? proj.completed = true : proj.completed = false

      console.log(tasks)
      proj.tasks = tasks._rejectionHandler0

      console.log(resources)
      proj.resources = resources._rejectionHandler0

      return proj
    })
}
// end stretch

function add(obj) {
  return db('projects')
    .insert(obj, 'id')
    .then(idArr => findById(idArr[0]))
}