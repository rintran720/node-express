require("dotenv").config();

export default {
  server: {
    port: Number(process.env.PORT) || 3000,
  },
  mongo: {
    url: process.env.MONGO_URL || "mongodb://localhost:27017/test-db",
  },
};
