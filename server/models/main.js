const Sequelize = require('sequelize');
const dbConfig = require('../config/db');

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password,
{
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {
        min: dbConfig.pool.min,
        max: dbConfig.pool.max,
        acquire: dbConfig.pool.acquire,
        idle:  dbConfig.pool.idle
    }
});

const db = {}


db.sequelize = sequelize;
db.Sequelize =  Sequelize;

db.Users = require('./users')(sequelize, Sequelize);


module.exports = db;