const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user) {
        req.user = { name: 'john', id: 7 }
        next()
    } else {
        res.status(401).send('unauthorized')
    }


}











module.exports = authorize