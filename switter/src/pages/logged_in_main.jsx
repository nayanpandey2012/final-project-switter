import React from "react";
import Tweets from "../components/Tweets";
import Sidebar from "../components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,  ButtonToolbar, Form} from "react-bootstrap";

export default class Logged_in_main extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Tweets />
                </div>
                <div>
                    <Sidebar />
                </div>
            </div>
        );
    };
};