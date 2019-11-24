import React from "react";
//import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Row, Navbar } from "react-bootstrap";

export default class Sidebar extends React.Component {

    
    // these will be changed to routes, placeholders for now

    render() {
        return (
            <Container>
        
                <Navbar bg="light">
                    Home
                </Navbar>
                <br/>
                <Navbar bg="light">
                    Login
                </Navbar>
                <br/>
                <h5>
                    Active Users <Badge variant="secondary">5</Badge>
                </h5>

            </Container>
        )
    }
}