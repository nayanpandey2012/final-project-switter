import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form } from "react-bootstrap";
import Tweet from './Tweet';
import { connect } from 'react-redux';
import { setTweets } from '../redux/actions/noteActions';


const ProfileSearch = ({ dispatch, tweets }) => {

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
                if (response.data) {
                    // get tweet stats by that particular username: 
                    dispatch(setTweets(response.data));
                }
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
    tweets: state.notesReducer.tweets,
});

export default connect(mapStateToProps, null)(ProfileSearch); 