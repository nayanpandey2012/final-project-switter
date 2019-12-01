const INITIAL_STATE = {
    isLoggedIn: false,
  };

  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SET_IS_LOGGED_IN':
        return {
          ...state,
          isLoggedIn: action.isLoggedIn,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;