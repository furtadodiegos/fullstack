const env = process.env.NODE_ENV || 'development';
const environments = require('./config.json');

if (env !== 'production') {
  const envConfig = environments[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
