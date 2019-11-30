const express = require("express");
const router = express.Router();
const Tweet = require("../src/models/tweetSchema");
const User = require("../src/models/userSchema");

router.get("/", (req, res) => {
  Tweet.find({})
    .then(data => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch(error => {
      console.log("error: ", daerrorta);
    });
});

// Save tweets data into MongoDB
router.post("/save", (req, res) => {
  console.log("Body", req.body);
  const data = req.body;

  const newBlogPost = new Tweet(data);

  newBlogPost.save(error => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server error..." });
      return;
    }
    // else {
    //   res.json({
    //     msg: "data inserted into database..!!!!"
    //   });
    // }
    return res.json({
      msg: "data inserted into database..!!!!"
    });
  });
});

// Save users data into MongoDB
router.post("/usersave", (req, res) => {
  console.log("Body", req.body);
  const data = req.body;

  const newUserPost = new User(data);

  newUserPost.save(error => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server error..." });
      return;
    }
    return res.json({
      msg: "data inserted into database..!!!!"
    });
  });
});

module.exports = router;
