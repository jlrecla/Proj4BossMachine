const express = require('express');

minionsRouter = express.Router();

const { getAllFromDatabase, getFromDatabaseById, addToDatabase,
    updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase } = require('../db');

let minions = [];

minionsRouter.get('/', (req, res, next) => {
    minions = getAllFromDatabase('minions');
    res.send(minions);
});

minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if (minion) {
        req.minion = minion;
        next();
    } else {
        res.sendStatus(404);
    }
});

minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
    let updatedMinionInstance = updateInstanceInDatabase('minions', req.body);
    res.send(updatedMinionInstance);
});

minionsRouter.delete('/:minionId', (req, res, next) => {
    if ( deleteFromDatabasebyId('minions', req.minion.id) ) {
        res.sendStatus(204);
    } else {
        res.sendStatus(204);
    }
});

module.exports = minionsRouter;