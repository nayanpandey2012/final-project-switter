import React from 'react';
import { Container, Navbar } from "react-bootstrap";
import switterLogo from "../csc667-logo.svg";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const AccountPage = ({ email }) => {
    return (
        <Container>
            <Navbar bg="white">
                <Navbar.Brand  style={logoStyle.float}>
                    <Link to='/profile'><img src={switterLogo} width="40" height="40" alt="logo" /></Link>
                </Navbar.Brand>
            </Navbar>
            <h1>Account Page</h1>
            <p>Your email: {email}</p>
        </Container>
    );
}

const mapStateToProps = state => ({
    email: state.userReducer.email,
});

export default connect(mapStateToProps, null)(AccountPage);

// CSS: 
const logoStyle = {
    position: {
      float: "left !important",
      marginTop: "-15px !important"
    }
};