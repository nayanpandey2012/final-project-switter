import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Form } from "react-bootstrap";

const ProfileSearch = () => {
    return (
        <form>
        <Form.Row>
            <Col>
                <Form.Control placeholder="Search by Username" style={{width:"200px"}}/>
            </Col>
            <Col>
            <Button variant="primary" 
                onClick={e => e.preventDefault()}
            >
                Search
            </Button>
            </Col>
        </Form.Row>
        </form>
    );
}

export default ProfileSearch; 