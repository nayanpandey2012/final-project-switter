import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,  Col } from "react-bootstrap";
import { setLikes } from '../redux/actions/userActions';
import { connect } from 'react-redux';

const Tweets = ({ dispatch, tweets, likes }) => {

    // const incrementLikes = () => {
    //     dispatch(setLikes(likes+1));
    // };

    return (
        <Container>
            <Col>
            {tweets.map((tweet, index) => (
                <div key={index}>
                    <h5>@{tweet.username}</h5>
                    <h5>{tweet.message}</h5>
                    {/* <button onClick={incrementLikes}>{tweet.likes}</button> */}
                    <br/>
                    <br/>
                </div>
            ))}
            </Col>
        </Container>
    );
}

const mapStateToProps = state => ({
    tweets: state.notesReducer.tweets,
    // likes: state.userReducer.likes,
});

export default connect(mapStateToProps, null)(Tweets);
