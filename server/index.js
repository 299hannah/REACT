const express = require('express');
const app = express();
http = require ('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors());

const server = http.createServer(app);

const io = new Server (server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket)=>{
    console.log(`user connected ${socket.id}`);


    socket.on('join_room',(data) =>{
        const { username, room } = data;
        socket.join(room);
});
});
// app.get('/', (req, res) => {
//     res.send('hi')
// });

server.listen(4000, () => 'server is running on port 4000');
