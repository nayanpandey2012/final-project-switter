import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import { setIsLoggedIn } from '../redux/actions/userActions';

const ProfileSidebar = ({ dispatch, activeUsers, username }) => {

    const logout = ( ) => {
        dispatch(setIsLoggedIn(false));
        window.location.href='/';
    }
    return (
        <Container>
            <br/>
            <br />
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
            <br/>
            <br/>
            <div>
                <h5>
                    Active Users <Badge variant="secondary">{activeUsers}</Badge>
                </h5>
            </div>
            <br/>
            <div>
                <h5>
                    Hello <Badge variant="secondary">{username}</Badge>
                </h5>
            </div>
            <br/>
            <Button variant="primary"
                onClick={logout}
            >
                Logout
            </Button>
        </Container>
    );
}

const mapStateToProps = state => ({
    activeUsers: state.userReducer.activeUsers,
    username: state.userReducer.username,
});

export default connect(mapStateToProps, null)(ProfileSidebar);