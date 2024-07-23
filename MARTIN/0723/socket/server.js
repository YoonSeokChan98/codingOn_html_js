const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const app = express();
const PORT = 8000;

// http 서버
const server = http.createServer(app);
// socket 서버
const io = socketIo(server);

app.set('view engine', 'ejs');

// 라우터
app.get('/', (req, res) => {
    res.render('client');
});
app.get('/chat', (req, res) => {
    res.render('chat')
});

// socket 채팅예제
io.on('connection', (socket) => {
    // console.log('join 전', socket.rooms);
    socket.on('join', (res) => {
        // 채팅방을 생성하는 방법은 .join(방 아이디)사용
        // 방이 존재하면 그 방으로 접속하거나, 없으면 생성한다.
        socket.join(res);

        // socket 객체에 값 넣기
        socket.chatRoom = res;
        // console.log('chatRoom', socket.chatRoom);

        // console.log('join 후', socket.rooms);

        // broadcast는 나를 제외한 전체 사용자(브라우저)에게 메세지 전달
        socket.broadcast.to(res).emit('create', '새로운 유저가'); // 나를 제외한
        io.to(res).emit('create', '채팅방에 입장하였습니다.'); // 나를 포함한
    });

    socket.on('message', (arg) => {
        const { user, message } = arg
        // io.to(특정 방 아이디).emit(이벤트) 특정방의 전체 사용자에게 이벤트 전달
        io.to(socket.chatRoom).emit('chat', `${user}: ${message}`)
    })
});

// // socket기본예제
// io.on('connection', (socket) => {
//     console.log(socket);
//     socket.on('open_message', (arg1, cb) => {
//         console.log('hi', arg1);
//         cb('백엔드에서 보내는 메세지');
//     });
//     socket.on('form_message', (arg) => {
//         console.log(arg);
//         socket.emit('backend_message', arg);
//     });
// });

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});