// action types:
const SET_USERNAME = 'SET_USERNAME';
const SET_PASSWORD = 'SET_PASSWORD';
const SET_EMAIL = 'SET_EMAIL';
const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';
const SET_ACTIVE_USERS = 'SET_ACTIVE_USERS';

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

export const setEmail = email => ({
  type: SET_EMAIL,
  email,
});


