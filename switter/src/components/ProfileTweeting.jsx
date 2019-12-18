import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import switterLogo from "../csc667-logo.svg";
import Tweets from './Tweets';
import { Container, Button, Navbar, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { getAllTweets } from "../redux/actions/noteActions";
import axios from "axios";

const ProfileTweeting = ({ dispatch, username }) => {
  // display all tweets on screen:
  React.useEffect(() => {
      dispatch(getAllTweets());
  }, []);
 
  const [terms, setTerms] = React.useState("");

  const search = el => {
    setTerms(el);
  };

  const postTweet = e => {
    e.preventDefault();

    const data = {
      type: 'SEND_MESSAGE',
      newNote: terms,
    }

    // save new tweet to mongodb
    axios
      .post("/api/postTweet", {
        username: username,
        message: terms,
      })
      .then(res => {
        console.log("Tweets sent to server...", res);
        
        setTerms("");
        window.location.reload(true);
        // client to server:
        window.ws.send(JSON.stringify(data));
      })
      .catch(e => {
        console.log("Error posting tweet to server...", e);
      });
  };

  return (
    <Container>
      <Navbar bg="white">
        <Navbar.Brand href="/profile" style={logoStyle.float}>
          <img src={switterLogo} width="40" height="40" alt="logo" />
        </Navbar.Brand>
      </Navbar>
      <form>
        <Form.Group controlId="tweet_submit">
          <Form.Control
            type="text"
            placeholder="What's on your mind"
            name="message"
            value={terms}
            onChange={e => search(e.target.value)}
          />
        </Form.Group>
        <Button onClick={postTweet}>Swit</Button>
      </form>
      <Tweets />
    </Container>
  );
};

const mapStateToProps = state => ({
  tweets: state.notesReducer.tweets,
  username: state.userReducer.username
});

export default connect(mapStateToProps, null)(ProfileTweeting);

// CSS:
const logoStyle = {
  position: {
    float: "left !important",
    marginTop: "-15px !important"
  }
};
