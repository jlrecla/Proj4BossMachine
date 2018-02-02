const express = require('express');

minionsRouter = express.Router();

const { getAllFromDatabase, getFromDatabaseById, addToDatabase,
    updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase } = require('../db');

let minions = [];

minionsRouter.get('/', (req, res, next) => {
    minions = getAllFromDatabase('minions');
    res.send(minions);
}); 

module.exports = minionsRouter;