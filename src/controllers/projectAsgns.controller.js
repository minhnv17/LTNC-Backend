'use strict';
const ProjectAsgns = require('../models/projectAsgns.model');

exports.createProject = (req, res) => {
    // var projectInfo = {
    //     "id": 1,
    //     "name": "Quan ly ban hang",
    //     "type": "project2"
    // }
    var projectInfo = req.body
    if(projectInfo){
        ProjectAsgns.registerProj(projectInfo, (callback) => {
            res.json(callback)
        })
    }
}