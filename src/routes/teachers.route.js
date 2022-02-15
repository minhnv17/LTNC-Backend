'use strict';
const express = require('express');
const router = express.Router();
const teacherControler = require('../controllers/teachers.controller');

router.get('/:id', teacherControler.getTeacher);
module.exports = router;