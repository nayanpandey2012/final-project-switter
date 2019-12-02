import React from "react";
//import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Row, Navbar, Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';

const Sidebar = ({ activeUsers }) => {
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
                Active Users <Badge variant="secondary">{activeUsers}</Badge>
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
    );
}

const mapStateToProps = state => ({
    activeUsers: state.userReducer.activeUsers,
})

export default connect(mapStateToProps, null)(Sidebar);
