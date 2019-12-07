const express = require("express");
const router = express.Router();
const Tweet = require("../src/models/tweetSchema");
const User = require("../src/models/userSchema");

// get all tweets in Tweet DB:
router.get("/", (req, res) => {
  Tweet.find({})
    .then(data => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch(error => {
      console.log("error: ", error);
    });
});

// find user tweets by username:
router.get("/searchuser", (req, res) => {
  console.log(req.query.username);

  Tweet.findOne({ username: req.query.username })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

// find a specific user by matching username and password:
router.get("/getUser", (req, res) => {
  let findUsername = req.query.username;
  let findPassword = req.query.password;

  User.findOne({ username: findUsername, password: findPassword })
    .then(data => {
      console.log("user data: ", data);
      res.json(data);
    })
    .catch(err => {
      console.log("error find user: ", err);
    });
});

// save tweets data into MongoDB:
router.post("/save", (req, res) => {
  console.log("Body", req.body);
  const data = req.body;

  const newBlogPost = new Tweet(data);

  newBlogPost.save(error => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server error..." });
      return;
    }
    return res.json({
      msg: "data inserted into database..!!!!"
    });
  });
});

// save users data into MongoDB:
router.post("/usersave", async (req, res) => {
  console.log("Body", req.body);
  const data = req.body;

  const newUserPost = new User(data);

  let user = await User.findOne({ username: req.body.username });

  if (!user) {
    newUserPost.save(error => {
      if (error) {
        res.status(500).json({ msg: "Sorry, internal server error..." });
        return;
      }
      return res.json({
        msg: "User registerd in Switter..!!!!"
      });
    });
  } else {
    console.log("User already Exists");
    return res.status(400).json({ msg: "User already exists.!!" });
  }
});

module.exports = router;
