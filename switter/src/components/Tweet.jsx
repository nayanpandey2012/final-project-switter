import React, { Component } from "react";

export default class Tweet extends Component {
    render() {
        const{username,message,likes } = this.props.box;
        return (
            <div style={tweetStyle}>
                <p>{username}</p>
                <p>{message}</p>
                <ion-icon name="heart"></ion-icon>

                <p>likes: {likes}</p>
            </div>
        )
    }
}

const tweetStyle = {
    borderStyle:'solid',
    borderColor:'grey',
    marginBottom: '3px',
}