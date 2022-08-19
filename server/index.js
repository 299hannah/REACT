const CHAT_BOT = 'ChatBot';
let chatRoom = '';
let allUsers = [];
const express = require('express');
const app = express();
http = require ('http');
const cors = require('cors');
const { Server } = require('socket.io');
const { Socket } = require('dgram');

app.use(cors());

const server = http.createServer(app);

const io = new Server (server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

// listens when client connects via socket.oi-client 
io.on('connection', (socket)=>{
    console.log(`user connected ${socket.id}`);

// add user room
    socket.on('join_room',(data) =>{
        const { username, room } = data;
        socket.join(room);

        let __createdtime__ = Date.now();
        socket.to(room).emit('receive_message',{
            message: `${username} just joined the room`,
            username: CHAT_BOT,
            __createdtime__,
        });
        Socket.emit('receive_message', {
            message: `Welcome ${username}`,
            username: CHAT_BOT,
            __createdtime__,
        });
        chatRoom =room;
        allUsers.push({id:socket.id, room});
        chatRoomUsers = allUsers.filter((user)=> user.room === room);
        socket.to(room).emit('chatroom_users', chatRoomUsers);
        socket.emit('chatroom_users', chatRoomUsers);
    });
});
// app.get('/', (req, res) => {
//     res.send('hi')
// });

server.listen(4000, () => 'server is running on port 4000');
