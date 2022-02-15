'use strict';
const db = require('../conn/connect');
const mysql = require('mysql');
const Projects = require('../models/projects.model');

const ProjectAsgns = function (projectAsgn) {
    this.teacherId = projectAsgn.teacherId;
    this.projectId = projectAsgn.projectId;
}

ProjectAsgns.registerProj = (projectInfo, result) => {
    db.query(`SELECT id FROM teachers WHERE userID=${mysql.escape(projectInfo.iD)}`, (err, idTeacher) => {
        if (err) return;
        else {
            Projects.createProject({ "name": projectInfo.name, "type": projectInfo.type }, (idProj) => {
                db.query(`INSERT INTO projectassignment SET ?`, {
                    "teacherId": idTeacher,
                    "projectId": idProj
                }, (err, res) => {
                    if (err) return;
                    else {
                        result(res)
                    }
                })
            })
        }
    })
}

module.exports = ProjectAsgns