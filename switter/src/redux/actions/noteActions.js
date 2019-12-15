import axios from 'axios';

// action types: 
const SET_TWEETS = 'SET_TWEETS';

// current tweet in db:
export const setTweets = tweets => ({
    type: SET_TWEETS,
    tweets,
});

// get all tweets from database: 
export const getAllTweets = () => (dispatch, getState) => {
    axios
        .get('/api')
        .then(res => {
            console.log('tweet data ', res.data);
            dispatch(setTweets(res.data))
        })
        .catch(e => {
            alert('Error finding data');
            console.log('no tweets found ', e)
        });
};

// get tweets of the user on Account page: 
export const getAccountTweet = () => (dispatch, getState) => {

    const { username } = getState().userReducer;

    axios
        .get('/api/accountTweets', {
            params: {
                username: username,
            }
        })
        .then(response => {
            console.log('print: ', response.data);
            dispatch(setTweets(response.data));
        })
        .catch(err => {
            console.log('error account tweets', err);
        });
};

