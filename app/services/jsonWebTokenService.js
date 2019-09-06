const expressJwt = require('express-jwt');
const CONFIG = require('../config/config');

function jwt() {
    const secret = CONFIG.jwt_encryption;
    return expressJwt({ secret }).unless({
        path: [
            // public routes that don't require authentication
            '/api/v1/register',
            'api/v1/login'
        ]
    });
}

module.exports = jwt;
