const express = require("express");
const app = express();
require("dotenv/config");

// Configuration server
var dbURi = process.env.DB_CONNECTION
var port = process.env.PORT || 3000

// Import Routes

app.get("/", (req, res) => {
    res.send("OKE server");
})


app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
})