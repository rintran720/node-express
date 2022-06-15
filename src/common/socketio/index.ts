import { NextFunction } from 'express';
import { Server, Socket } from 'socket.io';
import logFormat from '../utils/logFormat';
const socketio = (httpServer: any) => {
  const io = new Server(httpServer);

  io.on('connection', (socket: Socket) => {
    console.log(logFormat('ioConnect', `${socket.id}---Connected to socketio`));

    // client-side
    socket.on('disconnect', () => {
      console.log(
        logFormat('ioDisconnect', `${socket.id}---Disonnected to socketio`)
      );
    });

    // listen topics
    socket.on('chat message', (msg) => {
      console.log(socket.id);
      io.emit('chat message', msg);
    });
  });

  io.use((socket: Socket, next: any) => {
    // check jwt
    const token = socket.handshake.auth.token;
    next();
  });

  return io;
};

export default socketio;
