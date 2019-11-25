import React from "react";
//import "./app.css"
import switterLogo from '../csc667-logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Row, Navbar, Form } from "react-bootstrap";


export default class Header extends React.Component {

    
    // these will be changed to routes, placeholders for now

    render() {
        return (
            <Container>
                <Navbar bg="white">
                    <Navbar.Brand href="/" style={logoStyle.float}>
                        <img 
                            src={switterLogo}
                            width='40'
                            height='40'
                            alt='logo'
                        />
                    </Navbar.Brand>
                </Navbar>
                <Form>
                    <Form.Group controlId="tweet_submit">
                        {/* Note: Use <Navnar> for logo as homepage btn */}
                        {/* <Form.Label><a href='/'>Switter</a></Form.Label> */}
                        <Form.Control type="text" placeholder="Whats on your mind?" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={e => e.preventDefault()}>
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}

const logoStyle = {
    position: {
        float: 'left !important',
        marginTop: '-15px !important'
    }
}