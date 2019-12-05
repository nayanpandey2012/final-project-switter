// initial state: 
const INITIAL_STATE = {
    isLoggedIn: false,
    activeUsers: 0,
  };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_IS_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case 'SET_ACTIVE_USERS':
      return {
          ...state,
          activeUsers: action.activeUsers,
      }
    case 'SET_LIKED_TWEET':
      return {
        ...state,
        likedTweet: action.likedTweet,
      }
    default:
      return state;
  }
};
  
  export default userReducer;