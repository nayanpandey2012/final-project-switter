const express = require("express");
const router = express.Router();
const Tweet = require("../src/models/tweetSchema");
const User = require("../src/models/userSchema");

// get all tweets in Tweet DB:
router.get("/", (req, res) => {
  Tweet.find({})
    .then(data => {
      // console.log("Tweets data: ", data);
      res.json(data);
    })
    .catch(error => {
      console.log("error: ", error);
    });
});

// find user email profile by username:
router.get("/profileEmail", (req, res) => {
  console.log('print: ', req.query.username);

  User.find({ username: req.query.username })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

// find user tweets by username:
router.get("/searchUser", (req, res) => {
  console.log(req.query.username);

  Tweet.find({ username: req.query.username })
    .then(response => {

      res.json(response.data);
    })
    .catch(err => {
      console.log(err);
    });
});

// find a specific user by matching username and password:
router.get("/getUser", async (req, res) => {
  let findUsername = req.query.username;
  let findPassword = req.query.password;

  let user = await User.findOne({
    username: findUsername,
    password: findPassword
  });
  // let pwd = await User.findOne({ password: findPassword });
  if (findUsername === "" || findPassword === "") {
    return res
      .status(403)
      .json({ loginMsg: "Username and Password cannot be blank" });
  }

  if (!user) {
    console.log("Username or password doesn't exist");
    return res
      .status(403)
      .json({ loginMsg: "Incorrect username and password" });
  } else {
    console.log("Username and password matches.. ");
    return res.json({ loginMsg: "Username and password matches..." });
  }
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
        msg:
          "User registerd in Switter. You will now be redirected to the login page.!!"
      });
    });
  } else {
    console.log("User already Exists");
    return res.status(400).json({ msg: "User already exists." });
  }
});

module.exports = router;

