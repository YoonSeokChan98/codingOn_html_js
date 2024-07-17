const express = require('express');
const {main, post, detail, write} = require('../controller/page')
const router = express.Router();

router.get('/', main);
router.get('/post', post);
router.get('/post/:id', detail);
router.get('/write', write);


module.exports = router;