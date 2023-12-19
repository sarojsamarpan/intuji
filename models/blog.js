const { model, Schema } = require("mongoose");

const BlogModel = model(
  "Blog",
  new Schema({
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  })
);

module.exports = BlogModel;
