'use strict';
const db = require('../conn/connect');
const mysql = require('mysql');

const Students = function(student){
    this.id = student.id;
    this.name = student.name;
    this.class = student.class;
    this.address = student.address;
    this.phone = student.phone;
    this.email = student.email;
    this.password = student.password;
}

Students.getById = function(id, result){
    db.query(`SELECT * FROM students WHERE ID=${mysql.escape(id)}`, function(err, student){
        if(err){
            result(null);
        }else result(student);
    })
}

module.exports = Students;