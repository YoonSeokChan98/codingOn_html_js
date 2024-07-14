const express = require('express');
const controller = require('../controller/visitor');
const router = express.Router();

// 방명록에 관련된 데이터를 처리하는 라우터
// localhost:8000/api/visitor

// crud - create, read, update, delete

// get 방명록 전체 보이기
router.get('/', controller.allVisitor);

// get 방명록 하나 보이기
router.get('/:id', controller.getVisitor);

// post 방명록 하나 등록
router.post('/write', controller.postVisitor);

// patch 방명록 하나 수정
router.patch('/update', controller.patchVisitor);

// delate 방명록 하나 삭제
router.delete('/delete', controller.deleteVisitor);

module.exports = router;