module.exports = {
  apps: [
    {
      name: 'node-express-app',
      script: 'node',
      args: 'dist/index.js',
      watch: true,
      env: {},
      env_production: {
        PORT: 4860,
        NODE_ENV: 'production',
      },
    },
  ],
};
