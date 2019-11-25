// Credit to Poorva: 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,  ButtonToolbar, Form} from "react-bootstrap";
import switterLogo from '../csc667-logo.svg';
import { Link } from "react-router-dom";

const Sign_up = () => {
  return (
    <div style={{  height: '60vh', paddingTop: 100, paddingLeft: 550  }}>
      <h2 style={{color: "#00ACED"}}>Create your account</h2>   

      {/* NOTE: add home btn logo to return to homepage */}
      <span>
        <Link to='/'><img src={switterLogo} width='40px' height='40px' alt='logo'/></Link>
      </span>

    <Form>
    <Form.Group style={{width: '49vh'}}>
      <Form.Label>Avatar name</Form.Label>
      <Form.Control type="text" placeholder="Pick a name" />
      </Form.Group>
      <Form.Group controlId="formGroupEmail" style={{width: '49vh'}}>
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword" style={{width: '49vh'}}>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword" style={{width: '49vh'}}>
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
      <ButtonToolbar>
      <Button variant="outline-primary" style={{width: '49vh'}}>
        <Link to='/profile'>Sign up</Link>
      </Button>
      </ButtonToolbar>
    
    </Form>

    </div>
  );
};

export default Sign_up;