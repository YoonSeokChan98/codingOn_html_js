const express = require('express');
const ws = require('ws');
const http = require('http');
const app = express();
const PORT = 8000;

// http 서버 연결
const server = http.createServer(app);

// 웹소켓과 서버 연결
const wss = new ws.Server({ server: server });

// 설정
app.set('view engine', 'ejs');

//라우터
app.get('/', (req, res) => {
    res.render(('client'));
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


// 웹소켓
wss.on('connection', (socket) => {
    // socket 매개변수는 접속한 브라우저
    console.log('클라이언트 연결되었습니다.');
    // 메세지 이벤트
    socket.on('message', (message) => {
        // 웹 소켓을 통해 클라이언트와 서버간에 데이터를 주고 받을 때는 버퍼형태로 전달됨.
        // 버퍼를 쓰는 이유: 서버가 모두 다른 환경이기 때문에 객체를 전달할 때는 객체를 일련의
        // 바이트로 변환하는 직렬화 과정이 필요하기 때문이다.
        console.log('back-msg', JSON.parse(message));
        const msg = JSON.parse(message);
        // socket.send(`서버메세지:${msg.message}`);
        // wss.clients: 접속한 클라이언트들
        console.log(wss.clients);
        wss.clients.forEach(value => {
            value.send(`${msg.user}: ${msg.message}`);
        });
    });

    // 오류 이벤트
    socket.on('error', (err)=>{
        console.log('에러발생', err);
    });
    //접속 종료
    socket.on('close', ()=>{
        console.log('클라이언트가 종료되었습니다.');
    });
});