const jwt = require('jsonwebtoken');
const cfg = require('./config');

module.exports.verifyJwtToken = (req, res, next) => {
    let token;
    if ('authorization' in req.headers)
        token = req.headers['authorization'].split(' ')[1];
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token' });
    else {
        jwt.verify(token, cfg.JWT_SECRET,
            (err, decoded) => {
                if (err)
                    return res.status(500).send({ auth: false, message: 'Token auth failed' });
                else {
                    req._id = decoded._id;
                    next();
                }
            }
        )
    }
}