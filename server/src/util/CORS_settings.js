'use strict';

const whitelist = ['http://localhost:3000', 'http://my-project.com', 'http://localhost:3000/'];

module.exports = function origin(origin, callback) {
  if (whitelist.indexOf(origin) !== -1 || !origin) {
    callback(null, true);
  } else {
    callback(new Error('Not allowed by CORS'));
  }
};
  
