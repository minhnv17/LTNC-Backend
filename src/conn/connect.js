var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'anhmaiyeuem1A',
    database: 'ltnc'
});

connection.connect((err, connection) => {
    if(err) console.log("Connect fail to database!");
})

module.exports = connection;