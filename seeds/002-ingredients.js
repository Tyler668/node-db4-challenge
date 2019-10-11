exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('ingredients').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('ingredients').insert([
          {name: 'egg'},
          {name: 'butter'},
          {name: 'flour'},
          {name: 'sugar'},
          {name: 'cocoa powder'},
          {name: 'chocolate chips'},
          {name: 'baking soda'},
          {name: 'caramel'},
          {name: 'frosting'},
          {name: 'love'},
          {name: 'salt'}
        ]);
      });
  };
  