import React, { Component , tweetStyle} from "react";
import { connect } from 'react-redux';

export default class Tweet extends Component {
     
        constructor(props) {
          super(props);
          this.state = {
            username: "",
            message: "",
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
        const{ username,message,likes } = this.props;
        return (
            <div >

            </div>
        )
    }
}