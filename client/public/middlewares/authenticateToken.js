const jwt = require('jsonwebtoken')
const test = '401d23f45f3e485cf8f963b6fd921a66acfb58bcabd941c92e7272a14375e1c5ef701bdcea7692cce8ec752c71289c2311cb3b7d2752dbc57d90b550c925d1a3'
module.exports = async (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1]
    if (token == null) {
        res.json({
            timestamp: Date.now(),
            status: 401,
            message: 'Unauthorized'
        })
    } else {
        jwt.verify(token, test, async (err, user) => {
            if (err) {
                console.log(err)
            } else {
                next()
            }
        })
    }
}