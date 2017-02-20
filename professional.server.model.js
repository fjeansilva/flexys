'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfessionalSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  profile_url: {
    type: String
  },
  area: {
    type: String
  },
  city: {
    type: String
  },
  linkedin: {
    type: String
  },
  type_of_work: []
});

module.exports = mongoose.model('Professional', ProfessionalSchema);
