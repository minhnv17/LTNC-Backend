'use strict';
const Students = require('../models/students.model');

exports.getStudent = (req, res) => {
    var id = req.params.id;
    Students.getById(id, (student)=>{
        return res.json(student);
    })
}