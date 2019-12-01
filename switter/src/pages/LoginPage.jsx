// Credit to Tran: 
import React from 'react';
import LoginAdvert from '../components/login_advert.jsx';
import LoginForm from '../components/login_form.jsx';
import { connect } from 'react-redux';
import { setIsLoggedIn } from './redux/actions/userActions';
import Axios from 'axios';

const options = {
    withCredentials: true,
  };

const Login = ({ isLoggedIn, dispatch }) => {

    useEffect(() => {
        // Check if they are logged in previously. Auth server for cookies
        Axios.post('/auth/cookies', {}, { withCredentials: true })
          .then(res => {
            dispatch(setIsLoggedIn(true));
          })
          .catch(error => console.log(error));
      }, []);
    
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