const express = require('express');
const app = express();
const PORT = 8000;

// 뷰 템플릿
app.set('view engine', 'ejs'); // app.set('세팅', '폴더');
app.set('views', './views');

//정적파일 세팅
app.use('/public', express.static(__dirname + '/public'));

// 시간값 출력
app.use((req, res, next)=>{
    console.log('Time: ', Date.now());
    next();
});

// 라우터
// '/' == http://localhost:8000 // '/' == hostname을 뜻함
app.get('/', (req, res) => { // req, res는 매개변수라서 이름을 다르게 해도 됨 // 단, 헷갈릴 수 있기에 개발자들 끼리의 약속으로 req, res 라고 적음
    // send() - 클라이언트에 응답 데이터를 보낼 때
    res.send('hi my server'); // 객체로 보낼 때는 안에 중괄호 // 예) ({name: 홍길동})
});

// '/kdt' == http://localhost:8000/kdt
app.get('/kdt', (req, res)=>{
    // render() - 뷰 템플릿 랜더링 // 템플릿 이름과 랜더링 이름은 동일해야함
    res.render('test', {name:"윤석찬", age: 27});
});

// "/gugu" == http://localhost:8000/gugu
app.get("/gugu", (req, res)=>{
    res.render('gugudan', {dan: 3, leng:[1, 2, 3, 4, 5, 6, 7, 8, 9]});
});

//"/fruit" == http://localhost:8000/fruit
app.get('/fruit', (req, res)=>{
    res.render('fruit', {
        fruit: [
            {name: 'apple', kor: '사과'},
            {name: 'bananas', kor: '바나나'},
            {name: 'grapes', kor: '포도'},
            {name: 'peaches', kor: '복숭아'},
        ],
    });
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});