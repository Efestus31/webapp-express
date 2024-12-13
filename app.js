const express = require('express');
const server = express()
const FilmsRouter = require('./routes/films')
const notFound = require('./middlewares/NotFound')
const ServerErrorsHandler = require('./middlewares/ServerErrorsHandler')
const cors = require('cors')

const corsOptions = {
    origin: process.env.WEB_APP_FRONT_ORIGIN,
    optionsSuccessStatus: 200
}

server.use(cors(corsOptions))
server.use(express.json())

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "localhost";

//movies routes
server.use('/api/movies', FilmsRouter)

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
    console.log("CORS Origin: ", process.env.WEB_APP_FRONT_ORIGIN);
})