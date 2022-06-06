import mongoose from "mongoose";
import config from "../config";

const mongo = () => {
  return mongoose
    .connect(config.mongo.url)
    .then((result) => {
      console.info("Connect mongodb success!");
    })
    .catch((err) => {
      console.error("Can not connect mongodb!");
    });
};
export default mongo;
