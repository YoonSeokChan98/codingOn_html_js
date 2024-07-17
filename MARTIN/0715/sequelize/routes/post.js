const express = require('express');
const { all, write, one, updateFunc, deleteFunc } = require('../controller/post');
const router = express.Router();

// get /all 전체글 조회
router.get('/all', all);
// post /write 글 하나 생성
router.post('/write', write);
// get /:id 글 하나 조회 / 맨 아래로 가야함 / 같은 타입일 때
router.get('/:id', one);
// patch /update 글 하나 수정
router.patch('/update', updateFunc);
// delete /delete 글 하나 삭제
router.delete('/delete', deleteFunc)

module.exports = router;