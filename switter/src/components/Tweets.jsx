import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {  getAllTweets } from '../redux/actions/noteActions';
import selector from '../selectors';


const Tweets = ({ dispatch, tweetslist })=> {

    React.useEffect(() => {
        dispatch(getAllTweets());
      }, []);


        return (
        <div> 
            { /*tweetslist.map((tweet, i) => (
                    <div key={i}>
                    <h5>{tweet.username}</h5>
                    <h5>{tweet.message}</h5>
                    <h6>likes: {tweet.likes}</h6>
                    </div>
                    )) */
            }

        </div>
        )
    
}

function mapStateToProps(state) {
    return {
      tables: selector.tablesSelector(state),
    }
  }

/*const mapStateToProps = (state) => ({
    tweetslist: state.notesReducer.tweetslist,
    message: state.notesReducer.message,
    newTweets: state.notesReducer.newTweets,
    username: state.notesReducer.username,
});*/

export default connect(mapStateToProps)(Tweets);
