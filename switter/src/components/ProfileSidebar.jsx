import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Row, Navbar, Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';

const ProfileSidebar = ({ activeUsers }) => {

    // these will be changed to routes, placeholders for now
    return (
        <Container>
            <br/>
            <h5>
                Active Users <Badge variant="secondary">5</Badge>
            </h5>
            <br/>
            <h5>
                Hello 
            </h5>
            <br/>
            <Navbar bg="white">
                <Link to='/'>Logout</Link>
            </Navbar>
        </Container>
    );
}

const mapStateToProps = state => ({
    activeUsers: state.userReducer.activeUsers,
});

export default connect(mapStateToProps, null)(ProfileSidebar);