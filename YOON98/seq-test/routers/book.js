const express = require('express');
const { bookRegister, bookAll, bookOne } = require('../controller/book');
const router = express.Router();

// 도서 등록
router.post('/bookRegister', bookRegister)

// 댓글 생성
// router.post('/comment', createComment)

// 도서 전체 조회
router.get('/bookAll', bookAll)

// 하나 조회
router.get('/bookOne/:id', bookOne)

module.exports = router