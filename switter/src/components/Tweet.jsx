import React, { Component } from "react";


export default class Tweet extends Component {


    render() {
        const{username,message,likes } = this.props.box;
        return (
            <div style={tweetStyle}>
                <h1>{username}</h1>
                <p>{message}</p>
                <ion-icon name="heart"></ion-icon>

                <h2>{likes}</h2>
            </div>
        )
    }
}

const tweetStyle = {
    borderStyle:'solid',
    borderColor:'grey',
    marginBottom: '3px',
}