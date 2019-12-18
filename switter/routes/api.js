const express = require("express");
const router = express.Router();
const Tweet = require("../src/models/tweetSchema");
const User = require("../src/models/userSchema");
const redis = require('redis');
const bodyParser = require('body-parser');

const client = redis.createClient({
  host: '127.0.0.1', // define default host for redis server 
});

// check connection to redis db:
client.on('connect', () => {
  console.log('connected to redis!');
});

client.on('error', () => {
  console.log('disconnect from redis');
  client.quit();
});

// body-parser middleware:
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/* TWEET DATABASE */

// get all tweets in Tweet DB:
router.get("/", async (req, res) => {
  Tweet.find({})
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.log("error: ", error);
      return res.status(500).json;
    });
});

// insert new tweet to Tweet DB:
// newly create tweets will be save in both redis and Tweet DB:
router.post('/postTweet', (req, res) => {
  const data = req.body;

  // add new tweets to redis using LIST:
  // key = username, value = new tweet messages:
  client.rpush([data.username, data.message], (err, reply) => {
    console.log('print: ', reply); // return arr.length of value
  });

  const newBlogPost = new Tweet(data);
  
  // add new tweets to Tweet DB:
  newBlogPost.save(err => {
    if (!err) {
      res.json({ msg: 'data inserted into database...!!!!' });
      return;
    } else {
      return res.status(500).json({ msg: 'Sorry, internal server errorr...'});
    }
  });
});

// first find tweet in redis (cache hit)
// if tweet is not in redis (cache miss), find in Tweet DB:

// helper function to check cache:
const checkCache = (req, res, next) => {
  let { username } = req.query;

  // find tweets based on username in redis LIST: 
  client.lrange(username, 0, -1, (err, data) => {
    if (err) {
      console.log('err ', err);
      res.status(500).send('Redis Server Error Caching!');
    }
    
    if (data !== null) {
      console.log('cache hit!');
      console.log('cached value is: ', data);
      console.log([{ username: username, message: data[0] }, { username: username, message: data[1] }])
      return res.json(data);
    } else {
      console.log('cache miss!');
      next();
      return;
    }
  })
}

// find tweets by the login user:
router.get("/accountTweets", async (req, res) => {
  try {
    Tweet.find({ username: req.query.username })
    .then(data => {
      console.log(data);
      return res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

// find tweets by search by username in Tweet DB:
router.get("/searchUser", async (req, res) => {
  // console.log(req.query.username);

  Tweet.find({ username: req.query.username })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

/* USER DATABASE */

// find user email profile by username in User DB:
router.get("/profileEmail", async (req, res) => {
  // console.log('print: ', req.query.username);

  User.find({ username: req.query.username })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

// find a specific user by matching username and password in User DB:
router.get("/getUser", async (req, res) => {
  let findUsername = req.query.username;
  let findPassword = req.query.password;

  let user = await User.findOne({
    username: findUsername,
    password: findPassword
  });

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
 

// save users data into User DB:
router.post("/usersave", async (req, res) => {
  // console.log("Body", req.body);
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

