import express from 'express';
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.use(express.json());

app.listen(8000, () => {
  console.log('Server is running on http://127.0.0.1:8000');
});
