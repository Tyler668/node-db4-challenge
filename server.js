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
    const { id } = req.params.id;

    Recipes.getShoppingList(id)
        .then(list => {
            if (list.length) {
                res.json(list);
            } else {
                res.status(404).json({ message: 'Could not find get ingredients for that ID' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get ingredients' });
        });
});


module.exports = server;
