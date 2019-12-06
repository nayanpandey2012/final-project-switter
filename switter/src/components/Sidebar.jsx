import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Row, Navbar, Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';

const Sidebar = ({ activeUsers }) => {
    return (
        <Container>
            <br/>
            <h5>
                Active Users <Badge variant="secondary">{activeUsers}</Badge>
            </h5>
            <br/>
            <Button variant="primary"
                onClick={() =>  window.location.href='/welcome'}
            >
                Login / Register
            </Button>
            <form>
            <br/>
            <Form.Row>
                <Col>
                    <Form.Control placeholder="Search by Username" style={{width:"200px"}}/>
                </Col>
                <Col>
                <Button variant="primary"
                    onClick={() =>  window.location.href='/welcome'}
                >
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
});

export default connect(mapStateToProps, null)(Sidebar);
