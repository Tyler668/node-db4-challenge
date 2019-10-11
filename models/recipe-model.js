const db = require('../data/db-config.js');

module.exports = {
getRecipes,
getShoppingList,
getInstructions
};

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipeId) {
    return db('recipes_ingredients')
    .join('ingredients', 'recipes_ingredients.ingredient_id', '=', 'ingredients.id')
    .where({ recipe_id : recipeId })
    .select('ingredients.name', 'recipes_ingredients.quantity')
}

function getInstructions(recipeId) {
    return db('recipes')
    .where({ id : recipeId })
    .select('name','instructions')
}
