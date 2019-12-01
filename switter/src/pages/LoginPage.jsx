// Credit to Tran: 
import React from 'react';
import LoginAdvert from '../components/login_advert.jsx';
import LoginForm from '../components/login_form.jsx';
import { connect } from 'react-redux';

const Login = ({ isLoggedIn }) => {
    
    return (
        <div>
            <LoginAdvert />
            <LoginForm />
        </div>
    );
}

const mapStateToProps = state => ({
    isLoggedIn: state.userReducer.isLoggedIn,
});
  
  export default connect(mapStateToProps)(Login);