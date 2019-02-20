const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const owCharacter = new Schema({
  name: {
    type: String,
    required: true
  },
  weapon: {
    type: String,
    required: true
  },
  class: {
    type: String,
      required: true
  },
  ultimate: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('owCharacter', owCharacter);