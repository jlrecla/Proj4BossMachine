const express = require('express');

ideasRouter = express.Router();

const { getAllFromDatabase, getFromDatabaseById, addToDatabase,
    updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase } = require('../db');

const checkMillionDollarIdea = require('../checkMillionDollarIdea');

let ideas = [];

ideasRouter.get('/', (req, res, next) => {
    ideas = getAllFromDatabase('ideas');
    res.send(ideas);
});

ideasRouter.param('ideaId', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        req.idea = idea;
        next();
    } else {
        res.sendStatus(404);
    }
});

ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea);
});

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
    let updatedIdeaInstance = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedIdeaInstance);
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
  });

ideasRouter.delete('/:ideaId', (req, res, next) => {
    if ( deleteFromDatabasebyId('ideas', req.idea.id) ) {
        res.sendStatus(204);
    } else {
        res.sendStatus(204);
    }
});

module.exports = ideasRouter;