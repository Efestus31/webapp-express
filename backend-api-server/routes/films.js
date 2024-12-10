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

    //get all reviews for a movie
    const reviewsSQL = `SELECT * FROM reviews WHERE movie_id = ?`;


    //get movie by given id
    connection.query(sql, [id], (err, results) => {

        //handle errors
        if (err) return res.status(500).json({ err: err })
        if (results.length == 0) return res.status(404).json({ err: 'movie not found!' })

        //get all the reviews associated with the movie

        connection.query(reviewsSQL, [id], (err2, reviewsResults) => {
            if (err2) return res.status(500).json({ err: 'problem retrieving reviews' })

            const movie = {
                ...results[0],
                reviews: reviewsResults

            }

            res.json({
                movies: movie
            })
        })
    });
});



module.exports = router
