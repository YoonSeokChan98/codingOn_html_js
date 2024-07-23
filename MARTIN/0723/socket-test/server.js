const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const app = express();
const PORT = 8000;

const server = http.createServer(app);
const io = socketIo(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

io.on('connection', (socket) => {
    // console.log(socket);
    socket.on('hello_message', (arg, cb) => {
        console.log(arg);
        cb('안녕하세요.')
    });
    socket.on('study_message', (arg2)=>{
        console.log("client:",arg2);
        socket.emit('study_message2', `${arg2}: 공부합시다!`)
    })
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});