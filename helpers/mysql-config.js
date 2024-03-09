const mysql = require('mysql2/promise')
require('dotenv').config()

// Establish connection to database
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    connectionLimit: 10
});

exports.connection = connection