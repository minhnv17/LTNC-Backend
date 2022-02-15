'use strict';
const Teachers = require('../models/teachers.model');

exports.getTeacher = (req, res) => {
    var id = req.params.id;
    Teachers.getById(id, (teacher)=>{
        return res.json(teacher);
    })
}