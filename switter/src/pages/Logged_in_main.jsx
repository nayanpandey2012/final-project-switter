import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,  Col, Row } from "react-bootstrap";

export default class Logged_in_main extends React.Component {
   
    render() {
        return (
            <Container>
            <Row>
                <Col xs={8}>
                    <Header />
                </Col>
                <Col xs={4}><Sidebar /></Col>
            </Row>
            </Container>
        );
    };
};
