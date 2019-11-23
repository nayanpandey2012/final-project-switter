import React, { Component } from "react";
import Tweet from "./tweet";


export default class Tweets extends Component {


    render() {
        return (
            <div className="tweets">
                <ul>
                    <li>
                        <tweet />
                    </li>
                    <li>
                        <tweet />
                    </li>
                    <li>
                        <tweet />
                    </li>
                </ul>
            </div>
        )
    }
}

