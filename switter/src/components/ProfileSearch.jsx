import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import axios from 'axios';

const ProfileSearch = () => {

    const [searchTerm, setSearchTerm] = React.useState('');

    const searchuser = () => {
        axios
            .get('/api/searchuser', {
                params: {
                    username: searchTerm,
                }
            })
            .then(response => {
                console.log('user tweet ', response.data);
            })
            .catch(err => {
                console.log('no user tweet ', err);
            });
    }
    
    const getSearchterm = el => {
        setSearchTerm(el)
    }

    React.useEffect(() => {
        searchuser();
    }, []);

    return (
        <form>
        <Form.Row>
            <Col>
                <Form.Control 
                    style={{width:"200px"}}
                    placeholder="search by username" 
                    value={searchTerm}
                    onChange={e => getSearchterm(e.target.value)}
                />
            </Col>
            <Col>
            <Button variant="primary" 
                onClick={searchuser}
            >
                Search
            </Button>
            </Col>
        </Form.Row>
        </form>
    );
}

const mapStateToProps = state => ({
    username: state.userReducer.username,
});

export default connect(mapStateToProps, null)(ProfileSearch); 