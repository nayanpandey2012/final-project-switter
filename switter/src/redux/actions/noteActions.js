import axios from 'axios';


export const setTweets = tweetslist => ({
    type: 'SET_TWEETS',
    tweetslist,
});
 
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

export const setMessage = message => ({
    type: 'SET_MESSAGE',
    message,
});

export const setUsername = username => ({
    type: 'SET_USERNAME',
    username,
});

export const setNewTweet = newTweet => ({
    type: 'SET_NEW_TWEET',
    newTweet,
});

export const setIsLiked = isLiked => ({
    type: 'SET_IS_LIKED',
    isLiked,
})

export const updateTweet = () => ( dispatch, getState ) => {
    const {username, message} = getState().noteReducers;

    const newTweetData = {
        id: 1,
        username: username,
        message: message,
        likes: 0,
        createdAt: null
    }

    axios({
        url: "/api/save",
        method: "POST",
        data: newTweetData
      })
}


