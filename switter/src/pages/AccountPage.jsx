import React from 'react';
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import switterLogo from "../csc667-logo.svg";
import { connect } from 'react-redux';

const AccountPage = ({ email }) => {
    return (
        <Container>
            <Navbar bg="white">
                <Navbar.Brand href="/profile" style={logoStyle.float}>
                <img src={switterLogo} width="40" height="40" alt="logo" />
                </Navbar.Brand>
            </Navbar>
            <h1>Account Page</h1>
            <p>user email: {email}</p>
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