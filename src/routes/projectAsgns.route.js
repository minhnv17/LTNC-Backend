'use strict';
const express = require('express');
const router = express.Router();
const projectAsgnsController = require('../controllers/projectAsgns.controller');

router.post('/createProject', projectAsgnsController.createProject);

module.exports = router;