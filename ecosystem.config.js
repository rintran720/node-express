module.exports = {
  apps: [
    {
      name: 'node-express-app',
      script: 'node',
      args: 'dist/index.js',
      watch: true,
      env: {},
      env_production: {
        PORT: 3000,
        NODE_ENV: 'production'
      }
    }
  ]
};
