require('dotenv').config();
// console.log(process.env.HARPERDB_URL); // remove this after you've confirmed it working

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
const harperSaveMessage = require('./services/harper-save-message');
const io = new Server (server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

// listens when client connects via socket.oi-client 
io.on('connection', (socket)=>{
    console.log(`User connected ${socket.id}`);
});

    // add user room
    // socket.on('join_room',(data) =>{
    //     const { username, room } = data;
    //     socket.join(room);


    //     let __createdtime__ = Date.now();

    //     socket.to(room).emit('receive_message',{
    //         message: `${username} just joined the room`,
    //         username: CHAT_BOT,

    //         __createdtime__,
    //     });
    //     socket.emit('receive_message', {
    //         message: `Welcome ${username}`,
    //         username: CHAT_BOT,
    //         __createdtime__,
    //     });
    //     chatRoom =room;
    //     allUsers.push({id:socket.id, room});
    //     chatRoomUsers = allUsers.filter((user)=> user.room === room);
    //     socket.to(room).emit('chatroom_users', chatRoomUsers);
    //     socket.emit('chatroom_users', chatRoomUsers);
    // });
    // socket.on('send_message', (data) => {
    //     const { message, username, room, __createdtime__ } = data;
    //     io.in(room).emit('receive_message', data); // Send to all users in room, including sender
    //     harperSaveMessage(message, username, room, __createdtime__) // Save message in db
    //       .then((response) => console.log(response))
    //       .catch((err) => console.log(err));
    //   });

// app.get('/', (req, res) => {
//     res.send('hi')
// });
console.log(`${Socket.username}`);

server.listen(4000, () => 'server is running on port 4000');
