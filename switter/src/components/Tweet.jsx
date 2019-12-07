import React from "react";
import { connect } from 'react-redux';

const Tweet = ({ tweets }) => {
    return (
        <div>
            <h5>{tweets.username}</h5>
            <h5>{tweets.message}</h5>
            <h6>{tweets.likes}</h6>
        </div>
    );
}

const mapStateToProps = state => ({
    tweets: state.notesReducer.tweets,
});

export default connect(mapStateToProps, null)(Tweet);

// CSS: 
// const tweetStyle = {
//     borderStyle:'solid',
//     borderColor:'grey',
//     marginBottom: '3px',
// };


// export default class Tweet extends Component {
//     render() {
//         const{username,message,likes } = this.props.box;
//         return (
//             <div style={tweetStyle}>
//                 <p>{username}</p>
//                 <p>{message}</p>
//                 <ion-icon name="heart"></ion-icon>

//                 <p>likes: {likes}</p>
//             </div>
//         )
//     }
// }

