import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import switterLogo from "../csc667-logo.svg";
import { Container, Col } from "react-bootstrap";
import { Button, Navbar, Form } from "react-bootstrap";

var userName = "User1";
class ProfileLabel extends React.Component {
  render() {
    return (
      <Container>
        <Navbar bg="white">
          <Navbar.Brand href="/profile" style={logoStyle.float}>
            <img src={switterLogo} width="40" height="40" alt="logo" />
          </Navbar.Brand>

        </Navbar>
        <form onSubmit={this.submit}>
          <Form.Group controlId="tweet_submit">
            <Form.Control
              type="text"
              placeholder="What's on your mind"
              name="message"
            />
          </Form.Group>
          <Button 
            style={{marginInlineStart:"600px"}} 
            type="submit"
            onClick={e => e.preventDefault()}
          >
            Swit
          </Button>
        </form>
        <Col>
          <p>
            <b>
              <h2>{userName}</h2>
            </b>
          </p>
        </Col>
      </Container>
    );
  }
}

const logoStyle = {
  position: {
    float: "left !important",
    marginTop: "-15px !important"
  }
};

export default ProfileLabel;
