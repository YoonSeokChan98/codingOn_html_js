const express = require('express');
const { main, pageVisitor } = require('../controller/page');
const router = express.Router();

// localhost:8000
router.get('/', main);
router.get('/visitor', pageVisitor);
router.get('/visitor/:id', pageVisitor);

module.exports = router;