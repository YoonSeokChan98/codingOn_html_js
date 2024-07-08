const express = require('express');
const multer = require('multer');
const path = require('path');
const { title } = require('process');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended: true})); // 이거 왜 씀?
app.use(express.json());

app.set('view engine', 'ejs')

app.use('/uploads', express.static(__dirname + '/uploads')) // 스태틱이 뭐임?

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname)
            const newName = path.basename(file.originalname, ext) + DataTransfer.now() + ext;
            done(null, newName);
        }
    }),
});

app.get('/',(req, res)=>{
    res.render('index');
});
app.get('/form', (req, res)=>{
    res.render('form');
});

app.post('/upload', uploadDetail.single('userFile'), (req, res)=>{
    console.log('file', req.file);
    console.log('title', req.body);
});

app.post('/upload/axios', uploadDetail.single('userFile'), (req, res)=>{
    res.json({file: req.file, id: req.body, password: req.body,  name: req.body, age: req.body});
});

app.listen(PORT, (req, res)=>{
    console.log(`http://localhost:${PORT}`);
});