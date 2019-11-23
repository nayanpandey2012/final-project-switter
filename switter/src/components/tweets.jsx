import React, { Component } from "react";
import Tweet from "./Tweet";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Row } from "react-bootstrap";


export default class Tweets extends Component {


    render() {
        return this.props.tweets.map((tweet)=>(
            <Container>
                <Col xs={8}>
                    <Tweet box ={tweet}/>
                </Col>
            </Container>
        )

        );
    }
}

