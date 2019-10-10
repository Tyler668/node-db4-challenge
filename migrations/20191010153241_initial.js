
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl =>{
      tbl.increments();

      tbl.string('name', 255).notNullable();
  })
  .createTable('ingredients', tbl =>{
    tbl.increments();

    tbl.string('name', 255).notNullable();
  })
  .createTable('recipes_ingredients', tbl =>{
    tbl.increments();

    tbl
    .integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipes')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT');

  tbl
    .integer('ingredient_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('ingredients')   //potential error, maybe swap
    .onUpdate('CASCADE')
    .onDelete('RESTRICT');

  tbl.unique(['recipe_id', 'ingredient_id']);
  })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients');
};
