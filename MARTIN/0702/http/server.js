const http = require('http') //common 방법
// import http from 'http' / es6 방법

const server = http.createServer((req, res)=>{
    res.writeHead(200); // 200 = 성공
    res.write('<h1>Hello World</h1>');
    res.end('<p>END</p>')
});

// on(): server 객체에 이벤트를 등록
server.on('request', ()=>{
    console.log('요청이벤트');
});
server.on('connection', ()=>{
    console.log('접속이벤트');
});

// listen(): 서버를 실행
server.listen(8000, ()=>{
    console.log(`http://localhost:8000`);
});

// 서버 열기 node server.js
// 서버 닫기 컨트롤+c