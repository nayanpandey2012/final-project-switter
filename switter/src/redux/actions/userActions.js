
// credit to Chris: 
export const setIsLoggedIn = isLoggedIn => ({
    type: 'SET_IS_LOGGED_IN',
    isLoggedIn,
  });

// credit to Tran: 
export const setActiveUsers = activeUsers => ({
  type: 'SET_ACTIVE_USERS',
  activeUsers,
});

export const setLikedTweet = likedTweet => ({
  type: 'SET_LIKED_TWEET',
  likedTweet,
})