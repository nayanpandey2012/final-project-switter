// action types: 
const SET_TWEETS = 'SET_TWEETS';

// initial state: 
const INITIAL_STATE = {
    tweets: [],
    /*
    tweets = [
        {username: 'user1', message: 'hello'}
        {username: 'user1', message: 'hi'}
        {username: 'user2', message: 'hola'}
    ]
    */
};
  
const notesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TWEETS:
            // action.tweet: []
            return {
                ...state,
                tweets: action.tweets, // return an array of tweets objects
            };
        default:
            return state;
    }
};

export default notesReducer;
