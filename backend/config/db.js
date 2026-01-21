const mysql = require('mysql2');

//Coneção ao BD
const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'Banco1234!',
    database: 'SIGESC',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();

