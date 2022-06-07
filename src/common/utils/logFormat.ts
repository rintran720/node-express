import moment from "moment";
import { v4 as uuid } from "uuid";

const logFormat = (logType: string, msg: string) => {
  const dateTime = moment().format("DD-MM-yyyy HH:mm:ss");
  return `${dateTime}---${logType}---${uuid()}---${msg}\n`;
};

export default logFormat;
