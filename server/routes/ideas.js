const express = require('express');

ideasRouter = express.Router();

const { getAllFromDatabase, getFromDatabaseById, addToDatabase,
    updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase } = require('../db');

let ideas = [];

ideasRouter.get('/', (req, res, next) => {
    ideas = getAllFromDatabase('ideas');
    res.send(ideas);
});

module.exports = ideasRouter;