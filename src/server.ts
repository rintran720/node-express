import app from "./app";
import config from "./common/config";

const PORT = config.server.port;

app.listen(PORT, () => {
  console.log(`Application start at port ${PORT}`);
});

process.on("SIGINT", app.prototype.exitProcessCallback);
