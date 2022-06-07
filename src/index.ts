import http from "http";
import app from "./app";
import config from "./common/config";
import socketio from "./common/socketio";

const PORT = config.server.port;
const server = http.createServer(app);
const io = socketio(server);

(global as any)._io = io;

server.listen(PORT, () => {
  console.log(`Application start at port ${PORT}`);
});

process.on("SIGINT", app.prototype.exitProcessCallback);
