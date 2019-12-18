import React from "react";
import switterLogo from "../csc667-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Tweets from './Tweets';
import { Container, Button, Navbar, Form } from "react-bootstrap";
import { connect } from 'react-redux'; 
import { Link } from "react-router-dom";
import {  getAllTweets } from '../redux/actions/noteActions';

const Header = ({ dispatch }) => {

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
        <Link to="/welcome">
          {/* force lazy-registration */}
          <Button style={{marginInlineStart:"600px"}}>
            Swit
          </Button>
        </Link>
      </form>
      <div>
        <Tweets />
      </div>
    </Container>
  );
}

export default connect(null, null)(Header);

// CSS:
const logoStyle = {
  position: {
    float: "left !important",
    marginTop: "-15px !important"
  }
};
