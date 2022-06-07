import mongoose from 'mongoose';
import config from '../config';

const mongo = () => {
  mongoose
    .connect(config.mongo.url)
    .then((result) => {
      // console.info("Connect mongodb success!");
    })
    .catch((err) => {
      console.error('Can not connect mongodb!');
    });

  mongoose.connection.on('connected', () => {
    console.log('Mongodb connected!');
  });

  mongoose.connection.on('error', (err) => {
    console.error(err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongodb disconnected!');
  });

  return mongoose;
};

export default mongo;
