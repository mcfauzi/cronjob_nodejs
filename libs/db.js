import mysql from 'mysql';

// for testing
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'gotravel_dev',
// });

// for live
const db = mysql.createConnection({
    host: 'localhost',
    user: 'gotravel_admin',
    password: 'GoTravelly0102',
    database: 'gotravel_live',
});

export default db;