import React from "react";
import Tweets from "../components/Tweets";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ProfileLabel from "../components/ProfileLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Badge, Col, Row } from "react-bootstrap";

class ProfilePage extends React.Component {
  state = {
    tweets: [
      {
        id: 1,
        username: "user1",
        message: "I like apples :D",
        likes: 1
      },
      {
        id: 2,
        username: "user2",
        message: "Hey guys :D",
        likes: 2
      },
      {
        id: 3,
        username: "user3",
        message: "pineapples",
        likes: 3
      }
    ]
  };
  render() {
    return (
      <Container>
        <Row>
          <Col xs={9}>
            <ProfileLabel />
            <p><u><h3>Swits</h3></u></p>
            <Tweets tweets={this.state.tweets} />
          </Col>
          <Col xs={3}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProfilePage;