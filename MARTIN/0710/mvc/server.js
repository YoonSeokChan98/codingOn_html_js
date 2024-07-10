const express = require('express');
const app = express();
const PORT = 8000;


app.set('view engine', 'ejs');

// router
// const commentRouter = require('./routes'); // index는 생략이 가능함
const commentRouter = require('./routes/index');
// end point
app.use('/', commentRouter);

const userRouter = require('./routes/user');
app.use('/user', userRouter);


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});