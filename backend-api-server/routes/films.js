const express = require('express');
const router = express.Router();
const connection = require('../db/connection')

//Get all Films
router.get('/', (req, res) => {
    const sql = `SELECT * FROM movies`;

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ err: err })

        res.json({
            movies: results,
            count: results.length
        })
    });
});

router.get('/:id', (req, res) => {

    const id = req.params.id
    const sql = `SELECT * FROM movies WHERE id = ?`;

    //get movie by given id
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ err: err })
        console.log(results);

        res.json({
            movies: `returning the movie with an id of ${id}`
        })

    });


});



module.exports = router
