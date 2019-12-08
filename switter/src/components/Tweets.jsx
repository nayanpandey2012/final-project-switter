import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,  Col } from "react-bootstrap";
import Tweet from "./Tweet";
import { connect } from 'react-redux';

const Tweets = ({ tweets }) => {
    return (
        <Container>
            <Col>
            {tweets.map((tweet, index) => (
                <div key={index}>
                    <h5>{tweet.username}</h5>
                    <h5>{tweet.message}</h5>
                    <h6>{tweet.likes}</h6>
                    <br/>
                </div>
            ))}
            </Col>
        </Container>
    );
}

const mapStateToProps = state => ({
    tweets: state.notesReducer.tweets,
    message: state.notesReducer.message,
    newTweets: state.notesReducer.newTweets,
    username: state.userReducer.username,
});

export default connect(mapStateToProps, null)(Tweets);

// export default class Tweets extends Component {
//     render() {
//         return this.props.tweets.map((tweet)=>(
//             <Container>
//                 <Col>
//                 <Tweet box ={tweet}/>
//                 </Col>
//             </Container>
//         ));
//     }
// }

