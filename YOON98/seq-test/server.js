const express = require('express');
const db = require('./models');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());

// 라우터
// 페이지
const pageRouter = require('./routers/page');
app.use('/', pageRouter);

// api 페이지
const userRouter = require('./routers/user');
app.use('/api/user', userRouter);

const bookRouter = require('./routers/book');
app.use('/api/book', bookRouter);



// 404 페이지
app.use('404', (req, res)=>{
    // status(404) - 콜솔 헤더 등등에 404 not found오류메시지를 띄워줌,
    // render('404') - views폴더의 404 페이지를 랜더링함 즉, 404.ejs파일 실행 
    res.status(404).render('404');
});

// 테이블 싱크
// force: true  항상 테이블을 삭제 후 재생성
// force: false(기본값) 테이블이 존재하면 패스, 없으면 생성
db.sequelize.sync({ force: false }).then(()=>{
    app.listen(PORT, ()=>{ // 서버 연결
        console.log(`http://localhost:${PORT}`);
    });
});