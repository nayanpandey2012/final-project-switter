import React from "react";
import Tweets from "../components/Tweets";
import Sidebar from "../components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Row } from "react-bootstrap";

export default class Logged_in_main extends React.Component {

    render() {
        return (
            <Container>
                <Col>
                    <Tweets/>
                </Col>
                <Col>
                    <Sidebar />
                </Col>
            </Container>
        );
    };
};