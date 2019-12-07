import axios from 'axios';

// action types: 
const SET_TWEETS = 'SET_TWEETS';
const SET_MESSAGE = 'SET_MESSAGE';
const SET_NEW_TWEETS = 'SET_NEW_TWEETS';

// current tweet in db:
export const setTweets = tweets => ({
    type: SET_TWEETS,
    tweets,
});

// get all tweets from database
export const getAllTweets = () => (dispatch, getState) => {
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

// new tweet inserted by user state: 
export const setNewTweets = newTweets => ({
    type: SET_NEW_TWEETS,
    newTweets,
});

// updateNote
export const updateNewTweet = () => (dispatch, getState) => {
    // const {_id, newNote} = getState().notesReducer;
  
    // axios.get(`/update?_id=${_id}&notes=${newNote}`)
    // .then(() => {
    //     dispatch(setNewNote(''));
    //     dispatch(setId(''));
    //     dispatch(listNotes(''));
    // })
    // .catch(console.log);
}
