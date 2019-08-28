// import mysql from 'mysql';
const mysql = require('mysql');

// for testing
// const db = mysql.createConnection({
const db = mysql.createPool({
    host: 'YOUR_HOST',
    user: 'YOUR_USER',
    password: 'YOUR_PASS',
    database: 'YOUR_DB',
});

// export default db;
module.exports = {
    db: db,
}