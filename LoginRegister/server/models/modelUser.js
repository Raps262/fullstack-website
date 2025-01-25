const mysql = require('mysql');
require('dotenv').config();

const dbConfig = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_DATABASE,
});

module.exports = dbConfig;