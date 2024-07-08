const express = require('express');
const app = express();
const PORT = 8000;

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

// get
app.get('/axios', (req, res)=>{
    console.log('요청값', req.query);
    const {name, gender, birthYear, birthMonth, birthDay, hobby} = req.query;
    const data = {
        result: true,
        name,
        gender,
        birthYear,
        birthMonth,
        birthDay,
        hobby
    };
    console.log(gender, hobby);
    res.json(data);
});

// post
app.post('/axios', (req, res)=>{
    console.log('요청값', req.body);
    const {id, password} = req.body;
    const value = {
        result: true,
        id,
        password
    };
    res.json(value); // 여기까지함
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});