const express = require('express');

minionsRouter = express.Router();

const { getAllFromDatabase, getFromDatabaseById, addToDatabase,
    updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase } = require('../db');

let minions = [];

minionsRouter.get('/', (req, res, next) => {
    minions = getAllFromDatabase('minions');
    res.send(minions);
});

minionsRouter.get('/:minionId', (req, res, next) => {
    const minion = getFromDatabaseById('minions', req.params.minionId);
    if (minion) {
        res.send(minion);
    } else {
        res.status(404).send();
    }
});

module.exports = minionsRouter;