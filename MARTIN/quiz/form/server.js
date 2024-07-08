const express = require('express');
const app = express();
const PORT = 8000;

// 세팅
app.set('view engine', 'ejs');
app.set('views', './views');

// 미들웨어
app.use(express.urlencoded({extended: false}));

// 라우터
app.get('/', (req, res)=>{
    res.render('form')
})

app.get('/getForm', (req, res)=>{
    console.log(req.query);
    res.render('result', {title: 'GET요청 결과', userInfo: req.query})
});

app.post('/postForm', (req, res)=>{
    console.log(req.body);
    res.render('result', {title: 'POST요청 결과', userInfo: req.body})
})

// 서버연결
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})