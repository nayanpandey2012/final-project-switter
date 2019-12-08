// action types: 
const SET_TWEETS = 'SET_TWEETS';
const SET_MESSAGE = 'SET_MESSAGE';
const SET_NEW_TWEETS = 'SET_NEW_TWEETS';

// initial state: 
const INITIAL_STATE = {
    tweets: [],
    // message: '',
};
  
const notesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                message: action.message,
            };
        case SET_NEW_TWEETS:
            return {
                ...state,
                newTweets: action.newTweets,
            };
        case SET_TWEETS:
            return {
                ...state,
                tweets: action.tweets,
            };
        default:
            return state;
    }
};

export default notesReducer;
