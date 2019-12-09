import React from 'react';
import Tweets from './Tweets';
import {  getAllTweets } from '../redux/actions/noteActions';
import { connect } from 'react-redux';


const ProfileTweetDashboard = ({ dispatch, email }) => {
    
    React.useEffect(() => {
        dispatch(getAllTweets());
    }, []);

    return (
        <div>
            {/* Dashboard for all display tweets in DB: */}
            <br/>
            {email}
            <Tweets />
        </div>
    );
}

const mapStateToProps = state => ({
    tweets: state.notesReducer.tweets,
    message: state.notesReducer.message,
    newTweets: state.notesReducer.newTweets,
    email: state.userReducer.email,
});

export default connect(mapStateToProps, null)(ProfileTweetDashboard);