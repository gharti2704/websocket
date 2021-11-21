const express = require('express');
const app = express();
const { Server } = require('socket.io');
const io = new Server(app);

app.use(express.json());

app.listen(8000, () => {
  console.log('Server is running on http://127.0.0.1:8000');
});
