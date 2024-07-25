const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
    res.render('client');
});

const roomList = [];
io.on('connection', (socket) => {
    //socket변수는 접속한 브라우저들(구글탭)
    io.emit('roomList', roomList);
    //웹브라우저가 접속이되면 고유한 id값이 생성됨. socket.id
    console.log(socket.id);
    socket.on('create', (arg) => {
        //console.log(arg.roomName);
        //join(방이름): 없으면생성. 있으면입장
        socket.join(arg.roomName);
        //socket객체안에 원하는 값을 할당
        socket.roomName = arg.roomName;
        //나를 제외한 모든 방사람들에게 메세지 전달
        socket.to(arg.roomName).emit('notice', `${socket.id}님이 입장하셨습니다.`);

        //채팅방 목록 갱신
        if (!roomList.includes(arg.roomName)) {
            roomList.push(arg.roomName);
            //갱신됐을때 목록을 클라이언트로 전달, 전체가 봐야함
            //io.emit('roomList', roomList);
        }
    });
    socket.on('sendMessage', (arg) => {
        const { message, user } = arg;
        io.to(socket.roomName).emit('newMessage', { message, user });
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
