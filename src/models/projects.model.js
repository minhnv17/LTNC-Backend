'use strict';
const db = require('../conn/connect');
const mysql = require('mysql');

const Projects = function(project){
    this.name = project.name;
    this.type = project.type;
}

Projects.createProject = (newProject, result) => {
    db.query(`INSERT INTO projects SET ?`, newProject, (err, res) => {
        if(err) return;
        else{
            result(res.insertId);
        }
    })
}

module.exports = Projects