const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === 'john') {
        req.user = { name: 'john', id: 3 };
        console.log('Authorization successful');
        next()
    } else {
        res.status(403).send('Forbidden');
    }
}

module.exports = authorize
