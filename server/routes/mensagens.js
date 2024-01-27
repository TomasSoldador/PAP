
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173/Messages", // Substitua com a origem do cliente se for diferente
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('Novo usuário conectado');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

const PORT = 3002; // Confirme se esta é a porta correta
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
