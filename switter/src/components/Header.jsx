import React from "react";
//import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Row, Navbar, Form } from "react-bootstrap";

export default class Header extends React.Component {

    
    // these will be changed to routes, placeholders for now

    render() {
        return (
            <Container>
                <Form>
             
                    <Form.Group controlId="tweet_submit">
                        <Form.Label>Switter</Form.Label>
                        <Form.Control type="text" placeholder="Whats on your mind?" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                
                    </Form>
            </Container>
        )
    }
}