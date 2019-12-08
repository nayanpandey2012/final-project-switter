import React, { Component , tweetStyle} from "react";
import { connect } from 'react-redux';

///const Tweet = ({ tweets }) => {
    //return (
        //<div>
            //<h5>{tweets.username}</h5>
            //<h5>{tweets.message}</h5>
            //<h6>{tweets.likes}</h6>
       // </div>
    //);
//}

export default class Tweet extends Component {
     
        constructor(props) {
          super(props);
          this.state = {
            likes: 0,
            updated: true
          };
        }
      
        updateLikes = () => {

            if(!this.state.updated) {
              this.setState((prevState, props) => {
                return {
                  likes: prevState.likes + 1,
                  updated: true
                };
              });
        
            } else {
        
              this.setState((prevState, props) => {
                return {
                  likes: prevState.likes - 1,
                  updated: false
                };
              });
        
            }
          }

    render() {
        //const{username,message,likes } = this.props.box;
        return (
            <div >
              </div>
        )
    }
}

