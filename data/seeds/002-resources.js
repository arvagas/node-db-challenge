
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Accountant', description: 'maths good'},
        {name: 'Money'},
        {name: 'Computer', description: 'not for anything sketchy'},
        {name: 'HR', description: 'people person'},
        {name: 'Fridge', description: 'contains delicious food'},
      ])
    })
}
