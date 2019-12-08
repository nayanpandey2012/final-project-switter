import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge } from "react-bootstrap";
import { connect } from 'react-redux';
import { setIsLoggedIn } from '../redux/actions/userActions';
import ProfileSearch from './ProfileSearch';

const ProfileSidebar = ({ dispatch, activeUsers, username, isLoggedIn }) => {

    const logout = ( ) => {
        dispatch(setIsLoggedIn(false));
        window.location.href='/';
    }
    const profile = ( ) => {
        if(isLoggedIn == true){
            window.location.href='/profile';
        }   
    }
    return (
        <Container>
            <br/>
            <br />
            <ProfileSearch />
            <br/>
                <h5>
                    <Button variant="primary"
                    onClick={profile} >
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
});

export default connect(mapStateToProps, null)(ProfileSidebar);