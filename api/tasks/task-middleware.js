const Projects = require('../projects/project-model')

module.exports = {
  validateProjId,
}

function validateProjId(req, res, next) {
  const proj_id = req.body.project_id

  Projects.findById(proj_id)
  .then(proj => {
      if (proj) next()
      else res.status(400).json({ message: "invalid project id" })
  })
  .catch(err => res.status(500).json({ message: "error validating project id" }))
}