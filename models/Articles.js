const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String } = Schema.Types;

const articleSchema = new Schema({
  author: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: false,
  },

  publishedAt: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },

  urlToImage: {
    type: String,
    required: true,
  }
});

module.exports = new Model("Articles", articleSchema);
