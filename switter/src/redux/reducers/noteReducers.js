// action types: 
const SET_TWEETS = 'SET_TWEETS';
const SET_MESSAGE = 'SET_MESSAGE';
const SET_USERNAME = 'SET_USERNAME';
const SET_NEW_TWEETS = 'SET_NEW_TWEETS';

// initial state: 
const INITIAL_STATE = {
    tweetslist: [],
    username: '',
    message: '',
    newTweets: '',
};
  
const notesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                message: action.message,
            };
        case SET_USERNAME:
                return {
                    ...state,
                    message: action.username,
                };
        case SET_NEW_TWEETS:
            return {
                ...state,
                newTweets: [action.newTweets, ...state.list]
            };
        case SET_TWEETS:
            return {
                ...state,
                tweets: action.tweetlist,
            };
        default:
            return state;
    }
};

export default notesReducer;