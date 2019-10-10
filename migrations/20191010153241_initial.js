
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl =>{
      tbl.increments();

      tbl.string('name', 255).notNullable();
      tbl.string('instructions', 255).notNullable();
  })
  .createTable('ingredients', tbl =>{
    tbl.increments();

    tbl.string('name', 255).notNullable();
  })
  .createTable('recipes_ingredients', tbl =>{
    tbl.increments();

    tbl.string('quantity', 255).notNullable();

    tbl
    .integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipes')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

  tbl
    .integer('ingredient_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('ingredients')  
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

  })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients');
};
