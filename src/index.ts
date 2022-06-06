import compression from "compression";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();

const app = express();
app.use(helmet());
app.use(morgan("combine"));
app.use(
  compression({
    level: 6,
    threshold: 100 * 1000, // bytes
  })
);

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Application start at port ${PORT}`);
});
