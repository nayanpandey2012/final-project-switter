import React from "react";
//import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import { Container, Badge, Navbar } from "react-bootstrap";
=======
import { Container,Badge, Navbar } from "react-bootstrap";
>>>>>>> 212491f5d8e6e487dba415592dd34f3715d000dd
import { BrowserRouter as  Link } from "react-router-dom";

export default class ProfileSidebar extends React.Component {

    
    // these will be changed to routes, placeholders for now

    render() {
        return (
            <Container>
        
                <Navbar bg="white">
                    <Link to='/'>Home</Link>
                </Navbar>
                <br/>
                <Navbar bg="white">
                    <Link to='/'>Logout</Link>
                </Navbar>
                <br/>
                <h5>
                    Active Users <Badge variant="secondary">5</Badge>
                </h5>

            </Container>
        )
    }
}