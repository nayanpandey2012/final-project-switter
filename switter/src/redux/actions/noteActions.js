import axios from 'axios';

// action types: 
const SET_MESSAGE = 'SET_MESSAGE';
const SET_NEW_TWEETS = 'SET_NEW_TWEETS';
const SET_IS_LIKED = 'SET_IS_LIKED';
const SET_USERNAME = 'SET_USERNAME';

// current tweet in db:
export const setTweets = tweetslist => ({
    type: 'SET_TWEETS',
    tweetslist,
});

// get all tweets from database: 
export const getAllTweets = () => (dispatch) => {
    axios.get('/api')
        .then(res => {
            console.log('tweet data ', res.data);
            dispatch(setTweets(res.data))
        })
        .catch(e => {
            alert('Error finding data');
            console.log('no tweets found ', e)
        });
};

// message of user state:
export const setMessage = message => ({
    type: SET_MESSAGE,
    message,
});

export const setUsername = username => ({
    type: SET_USERNAME,
    username,
});

// new tweet inserted by user state: 
export const setNewTweets = newTweets => ({
    type: SET_NEW_TWEETS,
    newTweets,
});

export const setIsLiked = isLiked => ({
    type: SET_IS_LIKED,
    isLiked,
})

