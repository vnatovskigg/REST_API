const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String } = Schema.Types;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  summary: {
    type: String,
    required: false,
  },

  published: {
    type: Number,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },

  thumbnail: {
    type: String,
    required: true,
  },

  uid: {
    type: String,
    required: true,
  },

  segment: {
    type: String,
    required: true,  
  }
});

module.exports = new Model("Articles", articleSchema);
