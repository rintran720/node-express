import dotenv from 'dotenv';

dotenv.config();

export default {
  server: {
    port: Number(process.env.PORT) || 12111
  },
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/test-db'
  }
};
