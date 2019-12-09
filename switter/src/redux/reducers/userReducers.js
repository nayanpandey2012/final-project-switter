// action types:
const SET_USERNAME = "SET_USERNAME";
const SET_PASSWORD = "SET_PASSWORD";
const SET_EMAIL = "SET_EMAIL";
const SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN";
const SET_ACTIVE_USERS = "SET_ACTIVE_USERS";

// initial state:
const INITIAL_STATE = {
  isLoggedIn: false,
  activeUsers: 0,
  username: "",
  password: "",
  email: ""
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IS_LOGGED_IN:
      console.log(action.isLoggedIn);
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
      console.log(action.username);
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
      console.log(action.email);
      return {
        ...state,
        email: action.email
      };
    default:
      return state;
  }
};

export default userReducer;
