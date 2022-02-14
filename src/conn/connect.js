var mysql = require('mysql');
require("dotenv/config");

var connection = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err, connection) => {
    if(err) console.log("Connect fail to database!");
})

module.exports = connection;