import compression from "compression";
import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import helmet from "helmet";
import HttpError from "http-errors";
import morgan from "morgan";
import { v4 as uuid } from "uuid";
import v1Router from "./api/v1";
import { logError } from "./api/v1/utils/logError";
import mongoose from "./common/mongo";
const mongo = mongoose();

const app = express();
app.use(helmet());
app.use(morgan("common"));
app.use(
  compression({
    level: 6,
    threshold: 100 * 1000, // bytes
  })
);

app.use("/v1", v1Router);

// Handle errors
app.use((req, res, next) => {
  next(new HttpError.NotFound());
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  req.url;
  logError(`idError---${uuid()}---${req.url}---${req.method}---${err.message}`);
  res.status(err.status || 500);
  res.json({
    status: err.status || 500,
    message: err.message,
    links: ["http://localhost:3000/api-docs"],
  });
});
app.prototype.exitProcessCallback = async () => {
  await mongo.connection.close();
  process.exit();
};

export default app;
