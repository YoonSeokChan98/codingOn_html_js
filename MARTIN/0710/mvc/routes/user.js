const express = require('express')
const controller = require('../controller/user');
// const { user } = require('../controller/user'); // 개체구조분해 할당을 이용해도 됨
const router = express.Router();

// localhost:8000/user
router.get('/', controller.user);
// router.get('/', user); // 객체구조분해할당 할 경우 controller를 생략하고 user만 쓰면 됨

// localhost:8000/user/info
//router.get('/info');
// localhost:8000/user/abc
//router.get('/abc');


module.exports = router;