'use strict';
const express = require('express');
const router = express.Router();
const studentControler = require('../controllers/students.controller');

router.post('/Login', studentControler.login);
router.get('/:id', studentControler.getStudent);
module.exports = router;