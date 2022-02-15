'use strict';
const db = require('../conn/connect');
const mysql = require('mysql');

const Students = function(student){
    this.id = student.id;
    this.class = student.class;
}

Students.getById = function(id, result){
    db.query(`SELECT * FROM students WHERE userID=${mysql.escape(id)}`, function(err, student){
        if(err){
            result(null);
        }
        else {
            db.query(`SELECT * FROM users WHERE ID=${mysql.escape(student[0].userID)}`, (err, infoStudent) => {
                if(err) console.log(err)
                else {
                    infoStudent[0]['class'] = student[0].class;
                    delete infoStudent[0]['password'];
                    result(infoStudent);
                }
            })
        }
    })
}

module.exports = Students;