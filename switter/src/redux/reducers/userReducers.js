// action types:
const SET_USERNAME = 'SET_USERNAME';
const SET_PASSWORD = 'SET_PASSWORD';
const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';
const SET_ACTIVE_USERS = 'SET_ACTIVE_USERS';
const SET_LIKED_TWEET = 'SET_LIKED_TWEET';

// initial state: 
const INITIAL_STATE = {
    isLoggedIn: false,
    activeUsers: 0,
    username: '',
    password: '',
    likedTweet: 0,
  };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IS_LOGGED_IN:
      console.log(action.isLoggedIn);
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case SET_ACTIVE_USERS:
      return {
          ...state,
          activeUsers: action.activeUsers,
      }
    case SET_USERNAME:
      return {
        ...state, 
        username: action.username,
      }
    case SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      }
    case SET_LIKED_TWEET:
      return {
        ...state,
        likedTweet: action.likedTweet,
      }
    default:
      return state;
  }
};
  
export default userReducer;