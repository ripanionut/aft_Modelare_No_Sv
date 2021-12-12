const path = require("path");
const Dotenv= require("dotenv-webpack");

module.exports = {
  reactStrictMode: true,
};

module.exports = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    config.plugins.push(new Dotenv({silent: true}));
    
    return config;
  },
  env:{
    AUTH0_NAMESPACE: process.env_AUTH0_NAMESPACE
  }
};

