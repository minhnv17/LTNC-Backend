var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});

connection.connect((err, connection) => {
    if(err) console.log("Connect fail to database!");
})

module.exports = connection;