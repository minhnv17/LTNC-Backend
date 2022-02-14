'use strict';
const express = require('express');
const router = express.Router();
const usersControler = require('../controllers/users.controller');

router.post('/login', usersControler.login);
module.exports = router;