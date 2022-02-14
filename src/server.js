const express = require("express");
const app = express();
const studentRoutes = require('../src/routes/students.route');
var bodyParser = require('body-parser')
require("dotenv/config");

// Configuration server
var port = process.env.PORT || 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Import Routes
app.use('/api/v1/students', studentRoutes);
app.get("/", (req, res) => {
    res.send("OKE server");
})


app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
})