const CONFIG = require('./config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
    host: CONFIG.db_host,
    port: CONFIG.db_port,
    dialect: CONFIG.db_dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
module.exports = db;