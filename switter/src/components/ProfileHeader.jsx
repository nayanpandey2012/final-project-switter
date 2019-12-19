import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import switterLogo from "../csc667-logo.svg";
import { Container } from "react-bootstrap";
import Tweets from './Tweet';
import { Button, Navbar, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import { getAllTweets, setMessage, updateTweet} from '../redux/actions/noteActions';

const ProfileHeader = ({ dispatch, tweetslist, message }) => {

  React.useEffect(() => {
    dispatch(getAllTweets() );
  }, []);

  return (
    <Container>
      <Navbar bg="white">
        <Navbar.Brand href="/profile" style={logoStyle.float}>
          <img src={switterLogo} width="40" height="40" alt="logo" />
        </Navbar.Brand>
      </Navbar>
      <form>
        <Form.Group controlId="tweet_submit">
          <Form.Control onChange={e => dispatch(setMessage(e.target.value))}
            value={message}
            type="text"
            placeholder="What's on your mind"
            name="message"
          />
          <Button variant="primary" onClick={() => dispatch(updateTweet())}> Tweet </Button>
        </Form.Group>
        
      </form>
      <div>
      <div> 
            { tweetslist.map(e => (
                    <div>
                    { e.message }
                    </div>
                    )) 
            }

        </div>
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  tweets: state.notesReducer.tweets,
  message: state.notesReducer.message,
  newTweets: state.notesReducer.newTweets,
  username: state.userReducer.username,
});

export default connect(mapStateToProps, null)(ProfileHeader);

// CSS: 
const logoStyle = {
  position: {
    float: "left !important",
    marginTop: "-15px !important"
  }
};


