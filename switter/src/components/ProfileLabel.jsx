import React from "react";
//import "./app.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Button,
  Badge,
  Col,
  Row,
  Navbar,
  Form
} from "react-bootstrap";

var userName = "User1";
class ProfileLabel extends React.Component {
  render() {
    return (
      <Container>
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

export default ProfileLabel;
