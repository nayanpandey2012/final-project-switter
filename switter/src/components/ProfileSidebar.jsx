import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge } from "react-bootstrap";
import { connect } from 'react-redux';
import { setIsLoggedIn, setEmail } from '../redux/actions/userActions';
import ProfileSearch from './ProfileSearch';
import axios from 'axios';

const ProfileSidebar = ({ dispatch, activeUsers, username, email, isLoggedIn }) => {

    const logout = ( ) => {
        dispatch(setIsLoggedIn(false));
        window.location.href='/';
    };

    const profile = ( ) => {
        axios
            .get('/api/profileEmail', {
                params: {
                    username: username,
                }
            })
            .then(response => {
                console.log('username email: ', response.data[0].email);
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
                    <Button variant="primary"
                    onClick={profile}
                    >
                        Profile
                    </Button>
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
    email: state.userReducer.email,
});

export default connect(mapStateToProps, null)(ProfileSidebar);
