const express = require('express')
const router = express.Router();

// === 페이지
router.main = (req, res)=>{
    res.render('index');
};
router.post = (req, res)=>{
    res.render('post');
};

// === 데이터 요청, 응답

router.resultPost = (req, res)=>{
    console.log('요청값', req.body);
    const{id: reqId, pw: reqPw} = req.body;
    if (id === reqId && pw === reqPw) {
        res.json({ result: true, userId: id });
    } else {
        res.json({ result: false, userId: null });
    }
};
module.exports = { main, post, resultPost };