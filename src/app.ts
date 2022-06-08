import compression from 'compression';
import cors from 'cors';
import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response
} from 'express';
import helmet from 'helmet';
import HttpError from 'http-errors';
import morgan from 'morgan';
import { v4 as uuid } from 'uuid';
import v1Router from './api/v1';
import mongoose from './common/mongo';
import { logError } from './common/utils/logError';
const mongo = mongoose();

const app = express();
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
  })
);
app.use(helmet());
app.use(morgan('common'));
app.use(
  compression({
    level: 6,
    threshold: 100 * 1000 // bytes
  })
);

app.use('/api/v1', v1Router);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/example.js', (req, res) => {
  res.sendFile(__dirname + '/example.js');
});

// Handle errors
app.use((req, res, next) => {
  next(new HttpError.NotFound());
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  logError(`errorId---${uuid()}---${req.url}---${req.method}---${err.message}`);
  res.status(err.status || 500);
  res.json({
    status: err.status || 500,
    message: err.message,
    links: ['http://localhost:3000/api-docs']
  });
});
app.prototype.exitProcessCallback = async () => {
  await mongo.connection.close();
  process.exit();
};

export default app;
