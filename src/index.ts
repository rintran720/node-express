import compression from "compression";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import config from "./common/config";
import mongo from "./common/mongo";

mongo();

const app = express();
app.use(helmet());
app.use(morgan("common"));
app.use(
  compression({
    level: 6,
    threshold: 100 * 1000, // bytes
  })
);

const PORT = config.server.port;

app.listen(PORT, () => {
  console.log(`Application start at port ${PORT}`);
});
