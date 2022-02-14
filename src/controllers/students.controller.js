'use strict';
const Students = require('../models/students.model');

exports.getStudent = (req, res) => {
    var id = req.params.id;
    Students.getById(id, (student)=>{
        return res.json(student);
    })
}

exports.login = (req, res) => {
    var loginInfo = {
        "username": req.body.username,
        "password": req.body.password
    }
    Students.login(loginInfo, (result) => {
        // Response login status
        return res.json(result)
    })
}