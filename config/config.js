const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    port: process.env.PORT || 8888,
    dbURL: "mongodb://localhost:27017/stocks-tracker",
    authCookieName: "x-auth-token",
  },
  production: {},
};

module.exports = config[env];
