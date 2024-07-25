const express = require('express');
const { main, signup, login } = require('../controller/page');
const router = express.Router();

router.get('/', main);
router.get('/signup', signup);
router.get('/login', login);

module.exports = router;