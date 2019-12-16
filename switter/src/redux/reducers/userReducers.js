// action types:
const SET_USERNAME = "SET_USERNAME";
const SET_PASSWORD = "SET_PASSWORD";
const SET_EMAIL = "SET_EMAIL";
const SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN";
const SET_ACTIVE_USERS = "SET_ACTIVE_USERS";
const SET_MESSAGE = 'SET_MESSAGE';
const SET_LIKES = 'SET_LIKES';

// initial state:
const INITIAL_STATE = {
  isLoggedIn: false,
  activeUsers: 0,
  username: '',
  password: '',
  email: '', 
  message: '',
  likes: 0,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      };
    case SET_ACTIVE_USERS:
      return {
        ...state,
        activeUsers: action.activeUsers
      };
    case SET_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.password
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.email
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.message
      };
    case SET_LIKES:
      return {
        ...state,
        likes: action.likes
      };
    
    default:
      return state;
  }
};

export default userReducer;