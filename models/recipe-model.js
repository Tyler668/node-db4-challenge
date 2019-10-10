const db = require('../data/db-config.js');

module.exports = {
getRecipes,
getShoppingList,
getInstructions
};

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return db('ingredients')
        .join('ingregients', 'ingredients.id', '=', 'link.ingredient_id')
    
        .where({ recipe_id })
        .orderBy('id')
}

function getInstructions(id) {
    return db('recipes')
        .where({ id })
        .select('recipes.instructions')
        .first();
}

