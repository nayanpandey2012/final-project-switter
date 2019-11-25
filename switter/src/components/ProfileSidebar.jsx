import React from "react";
//import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Row, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class ProfileSidebar extends React.Component {

    
    // these will be changed to routes, placeholders for now

    render() {
        return (
            <Container>
        
                <Navbar bg="white">
                    <Link to='/'>Home</Link>
                </Navbar>
                <br/>
                <Navbar bg="white">
                    <Link to='/welcome'>Login</Link>
                </Navbar>
                <br/>
                <h5>
                    Active Users <Badge variant="secondary">5</Badge>
                </h5>

            </Container>
        )
    }
}