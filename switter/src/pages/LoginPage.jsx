import React from 'react';
import { Link } from "react-router-dom";
import '../LoginPage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import switterLogo from '../csc667-logo.svg';

const Login = () => {
  return (
    <div style={{ height: "60vh", paddingTop: 100 }}>
      <h2 style={{ color: "#00ACED" }}>Login with your Username</h2>
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
            required
          />
        </Form.Group>
        <button style={{ width: "49vh", marginInlineStart: 550 }} className='login-btn'>
          <Link to='/profile'>Log in</Link>
        </button>
      </Form>
    </div>
  );
}
  
export default Login;
