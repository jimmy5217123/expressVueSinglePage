require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1]
    if (token == null) {
        res.json({
            timestamp: Date.now(),
            status: 401,
            message: 'Unauthorized'
        })
    } else {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
            if (err) {
                console.log(err)
            } else {
                next()
            }
        })
    }
}