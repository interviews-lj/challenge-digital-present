const expressJwt = require('express-jwt');
const CONFIG = require('../config/config');

module.exports = jwt;

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