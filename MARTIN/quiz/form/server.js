const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: false}));

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

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})