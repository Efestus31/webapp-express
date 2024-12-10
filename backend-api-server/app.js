const express = require('express');
const server = express()
const FilmsRouter = require('./routes/films')

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "localhost";

server.use('/api/films', FilmsRouter)


server.get('/', (req, res) => {
    res.send('Server is up and running!')
})

server.listen(PORT, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
})