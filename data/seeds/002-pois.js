exports.seed = function(knex) {
      return knex('pois').insert([
        { name: 'old church' }, // 1
        { name: 'old bridge' }, // 2
        { name: 'the rail' }, // 3
      ]);
};
