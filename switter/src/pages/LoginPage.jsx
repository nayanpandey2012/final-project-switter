import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "../LoginPage.css";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import switterLogo from "../csc667-logo.svg";
import {
  setUsername,
  setPassword,
  setEmail,
  setIsLoggedIn
} from "../redux/actions/userActions";
import { connect } from "react-redux";
import axios from "axios";

const Login = ({ dispatch, username, password, email, isLoggedIn }) => {
  
  const [count, setCount] = useState("");

  const checkUser = () => {
    axios
      .get("/api/getUser", {
        params: {
          username: username,
          password: password,
          email: email
        }
      })
      .then(response => {
        if (response.data) {
          dispatch(setIsLoggedIn(true));
        }
      })
      .catch(err => {
        console.log("no user found", err);
        console.log("response from Server ", err.response.data.loginMsg);
        setCount(err.response.data.loginMsg);
      });
  };

  // React.useEffect(() => {
  //   checkUser();
  // }, []);

  const updateUsername = newUser => {
    if (newUser.length < 20) {
      dispatch(setUsername(newUser));
    }
  };

  const updatePassword = newPassword => {
    if (newPassword.length < 20) {
      dispatch(setPassword(newPassword));
    }
  };

  if (isLoggedIn) {
    console.log("isLoggedIn: ", isLoggedIn);
    setUsername(username);
    setEmail(email);
    return <Redirect to="/profile" />;
  }

  return (
    <div style={{ height: "60vh", paddingTop: 100 }}>
      <h2 style={{ color: "#00ACED" }}>Login with your username</h2>
      <span>
        <Link to="/">
          <img src={switterLogo} width="40px" height="40px" alt="logo" />
        </Link>
      </span>
      <br />
      <br />
      <Form>
        <Form.Group
          controlId="formGroupEmail"
          style={{ width: "49vh", marginInlineStart: 550 }}
        >
          <Form.Control
            type="text"
            placeholder="username"
            value={username}
            onChange={e => updateUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group
          controlId="formGroupPassword"
          style={{ width: "49vh", marginInlineStart: 550 }}
        >
          <Form.Control
            type="password"
            placeholder="*******"
            value={password}
            onChange={e => updatePassword(e.target.value)}
            required
          />
        </Form.Group>
      </Form>
      <button
        style={{ width: "49vh", marginInlineStart: 550 }}
        className="login-btn"
        onClick={checkUser}
      >
        Login
      </button>
      <p>{count}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.userReducer.username,
  password: state.userReducer.password,
  isLoggedIn: state.userReducer.isLoggedIn
});

export default connect(mapStateToProps, null)(Login);
