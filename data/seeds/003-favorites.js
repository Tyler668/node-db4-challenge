exports.seed = function(knex) {
      return knex('user_favorites').insert([
        { user_id: 1, poi_id: 1, notes: 'cool place' },
        { user_id: 1, poi_id: 2, notes: 'cool place' },
        { user_id: 1, poi_id: 3, notes: 'cool place' },
      ]);
};
