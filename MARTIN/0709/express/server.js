require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8000;

//router
app.get('/', (req, res)=>{
    // console.log(process.env);
    console.log(process.env.MYNAME);
    console.log(process.env.KDT);
    console.log(process.env.NODE_ENV);
    let test;
    if (process.env.NODE_ENV === 'production') {
        console.log('라이브 서버입니다.');
        test = process.env.MYNAME;
    } else {(process.env.NODE_ENV === 'development')
        console.log('개발용 서버입니다.');
        test = process.env.KDT;
    }
    console.log(`접속한 사람은 ${test}입니다.`);
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});
