'use strict';
const Users = require('../models/users.model');

exports.login = (req, res) => {
    var loginInfo = {
        "username": req.body.username,
        "password": req.body.password
    }
    Users.login(loginInfo, (result) => {
        // Response login status
        return res.json(result)
    })
}