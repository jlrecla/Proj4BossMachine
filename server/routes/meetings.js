const express = require('express');

meetingsRouter = express.Router();

const { getAllFromDatabase, getFromDatabaseById, addToDatabase,
    updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase } = require('../db');

let meetings = [];

meetingsRouter.get('/', (req, res, next) => {
    meetings = getAllFromDatabase('meetings');
    res.send(meetings);
});

module.exports = meetingsRouter;