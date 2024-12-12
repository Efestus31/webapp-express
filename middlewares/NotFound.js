//middleare to handle 404 errors

const notFound = (req, res, next) => {
    res.status(404).json({ err: 'not found' })
}

module.exports = notFound 