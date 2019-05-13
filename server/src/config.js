'use strict';

module.exports ={
  PORT: process.env.PORT || 8080,

  NODE_ENV: process.env.NODE_ENV || 'development',
  API_KEY: process.env.API_KEY,

  DB_URL: process.env.DB_URL,
  TEST_DB_URL: process.env.TEST_DB_URL,

  
};