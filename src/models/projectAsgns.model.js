'use strict';
const db = require('../conn/connect');
const mysql = require('mysql');
const Projects = require('../models/projects.model');

const ProjectAsgns = function (projectAsgn) {
    this.teacherId = projectAsgn.teacherId;
    this.projectId = projectAsgn.projectId;
}

ProjectAsgns.registerProj = (projectInfo, result) => {
    projectInfo.forEach(element => {
        db.query(`SELECT id FROM teachers WHERE userID=${mysql.escape(element["ID"])}`, (err, idTeacher) => {
            if (err) return;
            else {
                Projects.createProject({ "name": element.name, "type": element.type }, (idProj) => {
                    db.query(`INSERT INTO projectassignment SET ?`, {
                        "teacherId": idTeacher[0].id,
                        "projectId": idProj
                    }, (err, res) => {
                        if (err) console.log("Insert to project assign fail!");
                        else {
                            return
                        }
                    })
                })
            }
        })
    });
}

module.exports = ProjectAsgns