import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,  Badge, Col, Form } from "react-bootstrap";
import { connect } from 'react-redux';

const Sidebar = ({ activeUsers }) => {
    return (
        <Container>
            <br/>
            <form>
                <br/>
                <Form.Row>
                    <Col>
                        <Form.Control placeholder="Search by Username" style={{width:"200px"}}/>
                    </Col>
                    <Col>
                    <Button variant="primary"
                        onClick={() =>  window.location.href='/welcome'}
                    >
                        Search
                    </Button>
                    </Col>
                </Form.Row>
            </form>
            <br/>
            <div>
                <h5>
                    Active Users <Badge variant="secondary">{activeUsers}</Badge>
                </h5>
            </div>
            <br/>
            <Button variant="primary"
                onClick={() =>  window.location.href='/welcome'}
            >
                Login / Register
            </Button>
        </Container>
    );
}

const mapStateToProps = state => ({
    activeUsers: state.userReducer.activeUsers,
});

export default connect(mapStateToProps, null)(Sidebar);
