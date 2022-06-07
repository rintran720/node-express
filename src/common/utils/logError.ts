import fs from "fs";
import moment from "moment";
import path from "path";

const fileName = path.join(__dirname, "../logs", "error.log");

export const logError = async (msg: string) => {
  const dateTime = moment().format("DD-MM-yyyy HH:mm:ss");
  const content = `${dateTime}---${msg}\n`;
  try {
    fs.promises.appendFile(fileName, content);
  } catch (err) {
    console.error(msg);
  }
};
