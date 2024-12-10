const express = require('express');
const router = express.Router();
const connection = require('../db/connection')

//Get all Films
router.get('/', (req, res) => {
    res.json({
        films: 'all films here'
    })
});


module.exports = router
