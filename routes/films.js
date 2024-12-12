const express = require('express');
const router = express.Router();
const MovieController = require('../controller/MovieController')

//Get all movies
router.get('/', MovieController.index);

//Get a single movie
router.get('/:id', MovieController.show);



module.exports = router
