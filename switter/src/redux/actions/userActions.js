// action types:
const SET_USERNAME = 'SET_USERNAME';
const SET_PASSWORD = 'SET_PASSWORD';
const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';
const SET_ACTIVE_USERS = 'SET_ACTIVE_USERS';
const SET_LIKED_TWEET = 'SET_LIKED_TWEET';


export const setIsLoggedIn = isLoggedIn => ({
  type: SET_IS_LOGGED_IN,
  isLoggedIn,
});

export const setActiveUsers = activeUsers => ({
  type: SET_ACTIVE_USERS,
  activeUsers,
});

export const setUsername = username => ({
  type: SET_USERNAME,
  username,
});

export const setPassword = password => ({
  type: SET_PASSWORD,
  password,
});

export const setLikedTweet = likedTweet => ({
  type: SET_LIKED_TWEET,
  likedTweet,
});