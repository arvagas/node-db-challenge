
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Hire accountant', notes: 'preferably someone good', completed: false, project_id: 1},
        {description: 'Ready paper work', completed: true , project_id: 1},
        {description: 'Hide illegal trails', notes: 'shh...', completed: true, project_id: 1},
        {description: 'Buy cheese', notes: 'Something smooth', completed: false, project_id: 2},
        {description: 'Eat cheese', completed: false, project_id: 2},
        {description: 'Write down qualifications', completed: true, project_id: 3},
        {description: 'Post ad', completed: false, project_id: 3},
        {description: 'Interview candidates', notes: 'hope they are good', completed: false, project_id: 3},
        {description: 'Lowball them', notes: 'more profit in my pocket', completed: false, project_id: 3},
      ])
    })
}
