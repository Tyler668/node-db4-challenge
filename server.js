const express = require('express');

const Recipes = require('./models/recipe-model');

const server = express();

server.use(express.json());

server.get('/api/recipes', (req, res) => {
    // get all recipe from the database
    Recipes.getRecipes()
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

server.get('/api/recipes/:id/ingredients', (req, res) => {

    const { id } = req.params;

    Recipes.getShoppingList(id)
        .then(ingredients => {
            res.json(ingredients);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get ingredients.' });
        });
});


server.get('/api/recipes/:id', (req, res) => {
    const { id } = req.params;

    Recipes.getInstructions(id)
        .then(instructions => {
            res.json(instructions)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get instructions' });
        });
});

module.exports = server;
