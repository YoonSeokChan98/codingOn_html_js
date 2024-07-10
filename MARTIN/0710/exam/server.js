const express = require('express');
const app = express();
const PORT = 8000;

// 설정과 미들웨어
app.set('view engine', 'ejs');
app.use(express.json());

// 라우터
const userRouter = require('./routers/user'); //require은 원래 맨 위에 넣어야 함
app.use('/user', userRouter);

// 404
app.use('*', (req, res)=>{
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});