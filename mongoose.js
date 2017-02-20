'use strict';

const mongoose = require('mongoose');

module.exports = () => {
  const db = mongoose.connect(process.env.DATABASE_URI, (err) => {
    if (err) throw err;

    console.log('mongoDB run');
  });

  require('./professional.server.model');

  return db;
}
