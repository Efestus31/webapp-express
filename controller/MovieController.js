const connection = require('../db/connection')

//index callback
function index(req, res) {
    const sql = `SELECT * FROM movies`;

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ err: err })

        res.json({
            movies: results,
            count: results.length
        })
    });
}

//show callback
function show(req, res) {

    const id = req.params.id
    const sql = `SELECT * FROM movies WHERE id = ?`;

    //get all reviews for a movie
    const reviewsSQL = `SELECT * FROM reviews WHERE movie_id = ? ORDER BY id DESC`;


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
}


function review(req, res) {
    const movie_id = Number(req.params.id);
    const { name, text, vote } = req.body;
    const now = new Date();
    const reviewDate = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`

    //sql query
    const sql = "INSERT INTO `reviews` SET name=?, text=?, vote=?, movie_id=?, created_at=?"

    connection.query(sql, [name, text, vote, movie_id, reviewDate], (err, result) => {
        if (err) return res.status(500).json({ error: err })
        return res.status(201).json({ success: true })
    })
}

module.exports = {
    show,
    index,
    review
};
