import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TweetObject from "./TweetObject";
import { connect } from 'react-redux';

class Tweets extends Component {
    render() {
        const { tweets } = this.props;
        const post_list = tweets && tweets.map(el => <TweetObject key={el._id} message={el}/>);
        return (
            <div>
                { post_list }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tweets: state.notesReducer.tweets,
    message: state.notesReducer.message,
    newTweets: state.notesReducer.newTweets,
    username: state.userReducer.username,
});

export default connect(mapStateToProps)(Tweets);
