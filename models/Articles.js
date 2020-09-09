const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { Array } = Schema.Types;

const articleSchema = new Schema(
  {
    articles: {
      type: Array,
    },
  }
  // { timestamps: { createdAt: "created_at" } }
);

module.exports = new Model("Articles", articleSchema);
