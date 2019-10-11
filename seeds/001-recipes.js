
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Brownies', instructions: 'Make it bruh'},
        {name: 'Cookies', instructions: 'Make it bruh'},
        {name: 'Cake', instructions: 'Make it bruh'}
      ]);
    });
};
