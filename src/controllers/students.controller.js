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
        "username": req.body.user_name,
        "password": req.body.password
    }
    Students.login(loginInfo, (result) => {
        return res.json(result)
    })
}