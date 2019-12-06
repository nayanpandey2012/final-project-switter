import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Row, Navbar, Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { setIsLoggedIn } from '../redux/actions/userActions';

const ProfileSidebar = ({ dispatch, activeUsers, username, isLoggedIn }) => {
    
    let history = useHistory();

    const logout = ( ) => {
        dispatch(setIsLoggedIn(false));
        history.push('/');
    }
    return (
        <Container>
            <br/>
            <h5>
                Active Users <Badge variant="secondary">{activeUsers}</Badge>
            </h5>
            <br/>
            <h5>Hello {username}</h5>
            <br/>
            <Navbar bg="white">
                <button 
                    onClick={logout}
                >Logout</button>
            </Navbar>
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
    username: state.userReducer.username,
    isLoggedIn: state.userReducer.isLoggedIn,
});

export default connect(mapStateToProps, null)(ProfileSidebar);