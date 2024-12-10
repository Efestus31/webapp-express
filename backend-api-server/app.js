const express = require('express');
const server = express()
const FilmsRouter = require('./routes/films')
const notFound = require('./middlewares/NotFound')
const ServerErrorsHandler = require('./middlewares/ServerErrorsHandler')

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "localhost";

//movies routes
server.use('/api/films', FilmsRouter)

//routes
server.get('/', (req, res) => {
    res.send('Server is up and running!')
})
//middleware to handle 404 error with a catch all route
server.use(notFound)

//middleware to handle 500 errors
server.use(ServerErrorsHandler)


server.listen(PORT, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
})