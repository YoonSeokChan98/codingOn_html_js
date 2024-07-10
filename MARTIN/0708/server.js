const express = require('express'); // express 가져오기
const multer = require('multer'); // multer 가져오기 / 파일 업로드를 위해 사용함
const path = require('path') // path 가져오기
const app = express();
const PORT = 8000; // port 번호 8000으로 지정

// view engine
app.set('view engine', 'ejs'); // node.js에 가면 안씀 / ejs는 페이지를 구현하기 위함

// 정적 파일 세팅 / 파일이 읽어지기 위함 / 스태틱?
app.use('/uploads', express.static(__dirname + '/uploads'));

// multer // multer 공식이니까 이렇게 쓰면 됨
const storage = multer.diskStorage({
    destination: (req, file, done)=> { // done - 콜백함수(이름 마음대로 지어도 됨)
        done(null, 'uploads/') // callback(null, '파일명.')
    },
    // 파일이름
    filename: (req, file, done) => {
        // 확장자 추출 / extname????
        const ext = path.extname(file.originalname) // 확장자를 ext 안에 넣음
        // const ext = '.png'

        // 파일이름 추출 / 파일의 이름을 계속 바꿔주기 위해서 Date.now를 넣어서 실시간의 데이터를 넣어서 파일 이름을 바꿔줌
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        // const newName = '과제1' + 170234872934 + '.png'
        done(null, newName);
    },
});

// 파일 용량 제한
const limits = {
    fileSize: 1024 * 1024 * 5, // 5mb 제한
};



const upload = multer({storage, limits}); // 생략이 가능해서 생략해서 넣었지만 원래는 다음과 같다. / multer({storage: storage, limits: limits});
/*
const upload = multer( {

storge: multer.diskStorage({

    destination: (req, file, done)=> { // done - 콜백함수(이름 마음대로 지어도 됨)
        done(null, 'uploads/') // callback(null, '파일명.')
    },
    // 파일이름
    filename: (req, file, done) => {
        // 확장자 추출 / extname????
        const ext = path.extname(file.originalname) // 확장자를 ext 안에 넣음
        // const ext = '.png'

        // 파일이름 추출 / 파일의 이름을 계속 바꿔주기 위해서 Date.now를 넣어서 실시간의 데이터를 넣어서 파일 이름을 바꿔줌
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        // const newName = '과제1' + 170234872934 + '.png'
        done(null, newName);
    },
}),


limits: {
    fileSize: 1024 * 1024 * 5, // 5mb 제한
}

})



*/
// router
// === 페이지 / 'view engine'은 페이지를 만들기 위해 사용함
app.get('/', (req, res)=>{
    res.render('index')
});

// === 요청, 응답 데이터
app.post('/upload', upload.single('userfile'), (req, res)=>{
    console.log('요청과 응답 - file', req.file); // single 즉, 파일 하나만 보낼거라 req.file / 여러개의 파일을 보낼때는 req.files 이다.
    console.log('요청과 응답 - data', req.body);
    const {id, pw, username, age} = req.body;
    res.json( { filename: req.file.path, id, pw, username, age} ); // id: id, pw: pw ... 인데 생략해서 id, pw 라고 쓸 수 있음
});

// 서버연결
app.listen(PORT,(req, res)=>{
    console.log(`http://localhost:${PORT}`);
});