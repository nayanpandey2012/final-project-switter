import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setIsLoggedIn, setEmail, setUsername, setPassword } from '../redux/actions/userActions';
import ProfileSearch from './ProfileSearch';
import axios from 'axios';

const ProfileSidebar = ({ dispatch, activeUsers, username, password, email, isLoggedIn }) => {

    const logout = ( ) => {
        // return to initial state:
        dispatch(setIsLoggedIn(false));
        dispatch(setUsername(''));
        dispatch(setPassword(''));
        dispatch(setEmail(''));
    };

    const profile = ( ) => {
        axios
            .get('/api/profileEmail', {
                params: {
                    username: username,
                }
            })
            .then(response => {
                if (response.data ) {
                    dispatch(setEmail(response.data[0].email));
                }
            })
            .catch(err => {
                console.log("no user found", err);
            });
    }

    return (
        <Container>
            <br/>
            <br />
            <ProfileSearch />
            <br/>
                <h5>
                <Link to="/account">
                    <Button variant="primary"
                    onClick={profile}
                    >
                        Profile
                    </Button>
                </Link>
                </h5>
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
            <Link to="/">
                <Button variant="primary"
                    onClick={logout}
                >
                    Logout
                </Button>
            </Link>
        </Container>
    );
}

const mapStateToProps = state => ({
    activeUsers: state.userReducer.activeUsers,
    username: state.userReducer.username,
    password: state.userReducer.password,
    email: state.userReducer.email,
});

export default connect(mapStateToProps, null)(ProfileSidebar);
