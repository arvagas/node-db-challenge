
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Taxes', description: 'File those taxes or get hit with a penalty', completed: false},
        {name: 'Eat cheese', description: ' Fill the stomach with something yummy', completed: false},
        {name: 'Hire new employees', description: 'We need some more hands in the office', completed: false},
      ])
    })
}
