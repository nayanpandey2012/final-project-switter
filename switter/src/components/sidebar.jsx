import React from "react";

export default class Sidebar extends React.Component {

    // these will be changed to routes, placeholders for now

    render() {
        return (
            <div className="sidebar">
                <ul>
                    <li>
                        HOME
                    </li>
                    <li>
                        PROFILE
                    </li>
                    <li>
                        ACTIVE USERS
                    </li>
                    <li>
                        MORE+
                    </li>
                </ul>
            </div>
        )
    }
}