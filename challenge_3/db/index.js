var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'purchase',
    user: 'root',
    password: 'student'
});

connection.connect();

module.exports = connection;