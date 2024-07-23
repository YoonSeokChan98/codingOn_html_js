const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
    res.render('client');
});

const roomList = []
io.on('connection', (socket) => {
    // socket변수는 접속한 브라우저들(예:구글탭)
    io.emit('roomList', roomList);
    // 웹 브라우저가 접속이 되면 고유한 id값이 생성됨. / socket.id
    console.log(socket.id);
    socket.on('create', (arg) => { // roomName을 프론트에서 받음
        console.log('방 이름: ', arg.roomName);

        // .join() 없으면 생성하고, 있으면 입장한다.
        socket.join(arg.roomName);

        // socket객체 안에 원하는 값을 할당
        socket.roomName = arg.roomName
        socket.userName = arg.userName
        // socket.userName = arg.userName
        // 나를 제외한 모든 방 사람들에게 메세지를 전달
        socket.to(arg.roomName).emit('notice', `${socket.userName}님이 입장하셨습니다.`);

        //채팅방 목록 갱신
        if (!roomList.includes(arg.roomName)) { // if: 만약에 roomList에 원하는 roomName이 없다면?
            roomList.push(arg.roomName); // if: roomList배열에 roomName을 넣어준다.
            // 갱신됐을 때 목록을 클라이언트로 전달, 전체가 봐야함
            // io.emit('roomList', roomList);
        }
    });

    socket.on('sendMessage', (arg) => {
        const {message } = arg;
        // console.log("왜 안되는데", socket.userName); //야발
        io.to(socket.roomName).emit('newMessage',{ message, userName: socket.userName });
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
