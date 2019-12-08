import React, { Component } from "react";


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
        const{username,message,likes } = this.props.box;
        return (
            <div style={tweetStyle}>
                <p>{username}</p>
                <p>{message}</p>
                <div>
                    
                <p onClick={this.updateLikes}>
                    <ion-icon name="heart"></ion-icon>
                    </p>
        <p>{this.state.likes}</p>
        </div>
        
                
            </div>
        )
    }
}

const tweetStyle = {
    borderStyle:'solid',
    borderColor:'grey',
    marginBottom: '3px',
    
}