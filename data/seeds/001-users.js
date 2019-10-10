exports.seed = function(knex) {
      return knex('users').insert([
        { name: 'madison' }, // 1
        { name: 'vanesa' }, // 2
        { name: 'chris' }, // 3
      ]);
};
