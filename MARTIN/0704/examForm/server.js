const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
});
app.get('/getPage',(req,res)=>{
    res.render('get');
});
app.get('/postPage',(req,res)=>{
    res.render('post');
});

app.get('/resultGet', (req, res)=>{
    console.log(req.query);
    // 객체 구조 분해할당
    const { username, gender, birthYear, birthMonth, birthDay, hobby } = req.query;
    res.render('result', {
        title: 'GET전송결과', 
        userInfo:{
            username,
            gender,
            birthYear,
            birthMonth,
            birthDay,
            hobby,
            color: { result: false, color: null },
            number: { result: false, number: null },
        },
    });
});

app.post('/resultPost', (req, res)=>{
    console.log(req.body);
    // 객체 구조 분해할당
    const { username, gender, birthYear, birthMonth, birthDay, hobby, color, number } = req.body;
    res.render('result', {
        title: 'POST전송결과', 
        userInfo:{
            username,
            gender,
            birthYear,
            birthMonth,
            birthDay,
            hobby,
            // key-value형태에서 key값과 value의 변수 이름이 동일할 때는
            // 하나로 합치기가 가능
            color: { result: true, color: color },
            number: { result: true, number: number },
        },
    });
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});