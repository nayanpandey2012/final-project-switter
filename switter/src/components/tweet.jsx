import React, { Component } from "react";


export default class Tweet extends Component {


    render() {
        const{username,message,likes } = this.props.box;
        return (
            <div>
                <h1>{username}</h1>
                <p>{message}</p>
                <h2>{likes}</h2>
            </div>
        )
    }
}