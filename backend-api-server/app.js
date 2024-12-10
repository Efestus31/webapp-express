const express = require('express');
const server = express()
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "localhost";


server.get('/', (req, res) => {
    res.send('Server is up and running!')
})

server.listen(PORT, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
})