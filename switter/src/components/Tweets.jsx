import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,  Col } from "react-bootstrap";
import { connect } from 'react-redux';

const Tweets = ({ tweets }) => {

    return (
        <Container>
            <Col>
            {tweets.map((tweet, index) => (
                <div key={index}>
                    <h5>@{tweet.username}</h5>
                    <h5>{tweet.message}</h5>
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