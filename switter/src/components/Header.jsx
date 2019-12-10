import React from "react";
import switterLogo from "../csc667-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Tweets from './Tweets';
import { Container, Button, Navbar, Form } from "react-bootstrap";
import { connect } from 'react-redux'; 
import {  getAllTweets } from '../redux/actions/noteActions';

const Header = ({ dispatch, tweets, message, newTweets }) => {

  React.useEffect(() => {
    dispatch(getAllTweets());
  }, []);

  return (
    <Container>
      <Navbar bg="white">
        <Navbar.Brand href="/" style={logoStyle.float}>
          <img src={switterLogo} width="40" height="40" alt="logo" />
        </Navbar.Brand>
      </Navbar>
      <form>
        <Form.Group controlId="tweet_submit">
          <Form.Control
            type="text"
            placeholder="What's on your mind"
          />
        </Form.Group>
        <Button 
          style={{marginInlineStart:"600px"}} 
          // force lazy-registration
          onClick={() =>  window.location.href='/welcome'}
        >
          Tweet
        </Button>
      </form>
      <div>
        {/* {tweets.map((tweet, index) => (
          <div key={index}>
            <h5>@user: {tweet.username}</h5>
            <h5>{tweet.message}</h5>
            <h6>likes: {tweet.likes}</h6>
            <br />
          </div>
        ))} */ }
        <Tweets />
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  tweets: state.notesReducer.tweets,
  message: state.notesReducer.message,
  newTweets: state.notesReducer.newTweets,
});

export default connect(mapStateToProps, null)(Header);

// CSS:
const logoStyle = {
  position: {
    float: "left !important",
    marginTop: "-15px !important"
  }
};

