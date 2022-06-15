import dotenv from 'dotenv';

dotenv.config();

export default {
  server: {
    port: Number(process.env.PORT) || 12111,
    url: process.env.API_URL || '',
    tokenSecret:
      process.env.TOKEN_SECRET ||
      'b91028378997c0b3581821456edefd0ec7958f953f8c1a6dd856e2de27f0d7e0fb1a01cda20d1a6890267e629f0ff5dc7ee46bce382aba62d13989614417606a',
    refreshSecret:
      process.env.REFRESH_SECRET ||
      'b91028378997c0b3581821456edefd0ec7958f953f8c1a6dd856e2de27f0d7e0fb1a01cda20d1a6890267e629f0ff5dc7ee46bce382aba62d13989614417606a',
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || '1h',
    refreshExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || '1h',
  },
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/test-db',
  },
};
