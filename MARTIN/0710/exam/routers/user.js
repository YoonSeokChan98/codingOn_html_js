const express = require('express');
const controller = require('../controller/user');
const router = express.Router();

// localhost:8000/user
router.get('/', controller.main);

// localhost:8000/user/register
router.post('/register', controller.register)

module.exports = router;

