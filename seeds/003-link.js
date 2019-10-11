
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        { quantity:'1 cup', recipe_id: 1, ingredient_id: 1} ,
        { quantity:'2 cup', recipe_id: 1, ingredient_id: 2 },
        { quantity:'3 cup', recipe_id: 1, ingredient_id: 3 },
        { quantity:'4 cup', recipe_id: 2, ingredient_id: 4 } ,
        { quantity:'5 cup', recipe_id: 2, ingredient_id: 5 },
        { quantity:'6 cup', recipe_id: 3, ingredient_id: 6 },
      ]);
    });
};


