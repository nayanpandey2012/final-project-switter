import React from "react";
//import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Row } from "react-bootstrap";

export default class Sidebar extends React.Component {

    
    // these will be changed to routes, placeholders for now

    render() {
        return (
            <Container>
            <Col xsOffset={10} xs={2}>
            <Button variant="primary" size="lg" block>
                Home
            </Button>
            <Button variant="primary" size="lg" block>
                Profile
            </Button>
            <h1>
                Active Users <Badge variant="secondary">NUMBER</Badge>
            </h1>
            </Col>
            </Container>
        )
    }
}