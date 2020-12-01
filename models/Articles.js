const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String } = Schema.Types;

const articleSchema = new Schema({
  title: {
    type: String,
    required: false,
  },

  summary: {
    type: String,
    required: false,
  },

  published: {
    type: Number,
    required: false,
  },

  author: {
    type: String,
    required: false,
  },

  url: {
    type: String,
    required: false,
  },

  thumbnail: {
    type: String,
    required: false,
  },

  uid: {
    type: String,
    required: false,
  },

  segment: {
    type: String,
    required: false,  
  }
});

module.exports = new Model("Articles", articleSchema);
