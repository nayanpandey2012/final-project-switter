import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,  Col } from "react-bootstrap";
import { connect } from 'react-redux';
import {  getAllTweets } from '../redux/actions/noteActions';

const Tweets = ({ dispatch, tweetslist })=> {

    React.useEffect(() => {
        dispatch(getAllTweets());
      }, []);


        return (
        <div> 
            { tweetslist.map((tweet, i) => (
                    <div key={i}>
                    <h5>{tweet.username}</h5>
                    <h5>{tweet.message}</h5>
                    <h6>likes: {tweet.likes}</h6>
                    </div>
                    )) 
            }

        </div>
        )
    
}

<<<<<<< HEAD
const mapStateToProps = state => ({
    tweets: state.notesReducer.tweets,
});

export default connect(mapStateToProps, null)(Tweets);
=======
const mapStateToProps = (state) => ({
    tweetslist: state.notesReducer.tweetslist,
    message: state.notesReducer.message,
    newTweets: state.notesReducer.newTweets,
    username: state.notesReducer.username,
});

export default connect(mapStateToProps)(Tweets);
>>>>>>> b6fc8e54cd4ba67a2bceee3a6ad91dc36f3c8ead
