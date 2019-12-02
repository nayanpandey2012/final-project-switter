import React from "react";
//import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Row, Navbar, Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class Sidebar extends React.Component {

    
    // these will be changed to routes, placeholders for now

    render() {
        return (
            <Container>
                <br/>

                <Navbar bg="white">
                    <Link to='/'>Home</Link>
                </Navbar>
                
                <Navbar bg="white">
                    <Link to='/welcome'>Login / Register</Link>
                </Navbar>
                <h5>
                    Active Users <Badge variant="secondary">5</Badge>
                </h5>
                <form>
                <Form.Row>
                    <Col>
                        <Form.Control placeholder="Search by Username" style={{width:"200px"}}/>
                    </Col>
                    <Col>
                    <Button variant="primary" type="submit">
                    Search
                    </Button>
                    </Col>
                </Form.Row>
                </form>

            </Container>
        )
    }
}