const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
    // First: Check if the token in the headers
    let token = req.get('Authorization') || req.query.token || req.body.token;
    if (token) {
        // Strip token by itself
        token = token.replace('Bearer ', '');
        jwt.verify(token, SECRET, function(err, decoded) {
            if(err) {
                next(err);
            } else {
                req.user = decoded.user;
                next();
            }
        })
    } else {
        next();
    }
}