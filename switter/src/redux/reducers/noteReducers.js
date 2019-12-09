// action types: 
const SET_TWEETS = 'SET_TWEETS';

// initial state: 
const INITIAL_STATE = {
    tweets: [],
};
  
const notesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case SET_TWEETS:
                console.log('print this: ', action.tweets);
            return {
                ...state,
                tweets: [action.tweets], // return an array of tweets arrays
            };
        default:
            return state;
    }
};

export default notesReducer;
