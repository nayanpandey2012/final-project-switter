import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import switterLogo from "../csc667-logo.svg";
import { Link } from "react-router-dom";
import ProfileTweetDashboard from './ProfileTweetDashboard';
import { Container, Button, Navbar, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import { getAllTweets} from '../redux/actions/noteActions';

const ProfileHeader = ({ dispatch, tweets }) => {

  React.useEffect(() => {
    dispatch(getAllTweets());
  }, []);

  return (
    <Container>
      <Navbar bg="white">
        <Navbar.Brand  style={logoStyle.float}>
          <Link to='/profile'><img src={switterLogo} width="40" height="40" alt="logo" /></Link>
        </Navbar.Brand>
      </Navbar>
      <form>
        <Form.Group controlId="tweet_submit">
          <Form.Control
            type="text"
            placeholder="What's on your mind"
            name="message"
          />
        </Form.Group>
        <Button 
          
          onClick={e => e.preventDefault()}
        >
          Tweet
        </Button>
      </form>
      <ProfileTweetDashboard />
    </Container>
  );
}

const mapStateToProps = state => ({
  tweets: state.notesReducer.tweets,
  // message: state.userReducer.message,
  // likes: state.userReducer.likes,
  // username: state.userReducer.username,
});

export default connect(mapStateToProps, null)(ProfileHeader);

// CSS: 
const logoStyle = {
  position: {
    float: "left !important",
    marginTop: "-15px !important"
  }
};

