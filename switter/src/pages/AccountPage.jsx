import React from 'react';
import { Container, Navbar } from "react-bootstrap";
import switterLogo from "../csc667-logo.svg";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios';
import Tweets from '../components/Tweets';
import { setTweets, getAccountTweet } from '../redux/actions/noteActions';

const AccountPage = ({ email, username, dispatch }) => {

    const accountTweets = () => {

        axios
            .get('/api/accountTweets', {
                params: {
                    username: username,
                }
            })
            .then(response => {
                console.log('print: ', response.data);
                dispatch(getAccountTweet(response.data));
            })
            .catch(err => {
                console.log('error account tweets', err);
            });
    };

    React.useEffect(() => {
        accountTweets();
    }, []);

    return (
        <Container>
            <Navbar bg="white">
                <Navbar.Brand  style={logoStyle.float}>
                    <Link to='/profile'><img src={switterLogo} width="40" height="40" alt="logo" /></Link>
                </Navbar.Brand>
            </Navbar>
            <h1>Account Page</h1>
            <br />
            <h5>Email: {email}</h5>
            <br/>
            <h3>Your Swits</h3>
            <Tweets/>
        </Container>
    );
}

const mapStateToProps = state => ({
    email: state.userReducer.email,
    username: state.userReducer.username,
    tweets: state.notesReducer.tweets,
});

export default connect(mapStateToProps, null)(AccountPage);

// CSS: 
const logoStyle = {
    position: {
      float: "left !important",
      marginTop: "-15px !important"
    }
};