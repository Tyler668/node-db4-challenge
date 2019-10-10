const express = require('express');

const db = require('./data/db-config.js');

const server = express();

server.use(express.json());

server.get('/api/recipe', (req, res) => {
  // get all recipe from the database
  db('recipe')
  .then(recipe => {
    res.status(200).json(recipe);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.get('/api/animals', (req, res) => {
  // get all animals from the database
  // include recipe name
  db('animals as a')
    .leftJoin('recipe as s', 's.id', 'a.recipe_id')
    .select('a.id', 'a.animal_name', 's.recipe_name')
  .then(animals => {
    res.status(200).json(animals);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

// create animal
server.post('/api/animals', (req, res) => {
  db('animals').insert(req.body)
  .then(ids => {
    const id = ids[0];

    db('animals')
      .where({ id })
      .first()
    .then(animal => {
      res.status(201).json(animal);
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

// remove recipe
server.delete('/api/recipe/:id', (req, res) => {
  db('recipe')
    .where({ id: req.params.id })
    .del()
  .then(count => {
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

module.exports = server;
