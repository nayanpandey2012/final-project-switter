import React from "react";
import Tweets from "../components/Tweets";
import Sidebar from "../components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Row } from "react-bootstrap";

export default class Logged_in_main extends React.Component {
    state = {
        tweets:[
          {
            id: 1,
            username: "user1",
            message: 'I like apples :D',
            likes: 1
          },
          {
            id: 2,
            username: "user2",
            message: 'Hey guys :D',
            likes: 2
          },
          {
            id: 3,
            username: "user3",
            message: 'pineapples',
            likes: 3
          }
        ]
      }
    render() {
        return (
            <Container>
                <Col>
                    <Tweets tweets={this.state.tweets} />
                </Col>
                <Col>
                    <Sidebar />
                </Col>
            </Container>
        );
    };
};