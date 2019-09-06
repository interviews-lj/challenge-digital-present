require('dotenv').config();

let CONFIG = {} //Make this global to use all over the application

CONFIG.app          = process.env.APP   || 'dev';
CONFIG.port         = process.env.PORT  || '3001';

CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mysql';
CONFIG.db_host      = process.env.DB_HOST       || 'localhost';
CONFIG.db_port      = process.env.DB_PORT       || '3306';
CONFIG.db_name      = process.env.DB_NAME       || 'name';
CONFIG.db_user      = process.env.DB_USER       || 'root';
CONFIG.db_password  = process.env.DB_PASSWORD   || 'db-password';

CONFIG.jwt_secret  = process.env.JWT_SECRET || '9z$C&F)J@NcRfTjWnZr4u7x!A%D*G-Ka';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '86400';

CONFIG.userRoles = ['USER', 'ADMIN'];

module.exports = CONFIG;