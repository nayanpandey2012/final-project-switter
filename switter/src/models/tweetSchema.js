const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Tweet Collection
const TweetSchema = new Schema({
  id: String,
  username: String,
  message: String,
  likes: String,
  createdAt: {
    type: String,
    default: Date.now()
  }
});

const Tweet = mongoose.model("Tweet", TweetSchema);

module.exports = Tweet;
