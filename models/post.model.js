const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    availableNetworks: {
      type: String,
      required: true,
    },
    userId: {
      //type: mongoose.Schema.Types.ObjectId,
      type: String,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;