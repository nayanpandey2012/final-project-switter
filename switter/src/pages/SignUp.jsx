// Credit to Poorva:
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import switterLogo from "../csc667-logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";

export default class SignUp extends React.Component {
  state = {
    id: 1,
    username: "",
    password: "",
    email: "",
    c_password: ""
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  submit = e => {
    e.preventDefault();

    const userpayload = {
      id: this.state.id,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      c_password: this.state.c_password
    };

    if (this.state.password !== this.state.c_password) {
      alert("Passwords don't match");
    } else {
      axios({
        url: "/api/usersave",
        method: "POST",
        data: userpayload
      })
        .then(res => {
          console.log("Data has been sent to the server", res);
          this.resetUserdataInputs();
          setTimeout(() => {
            window.location.href = "login";
          }, 3000);
          console.log("i am here");
          this.setState({ dbMsg: res.data.msg });
        })

        .catch(e => {
          console.log("Internal server error");
          console.log(e);
          this.setState({ dbMsg: e.response.data.msg });
        });
    }
  };

  resetUserdataInputs = () => {
    this.setState({
      username: "",
      password: "",
      email: "",
      c_password: ""
    });
  };

  render() {
    console.log("user State: ", this.state);
    return (
      <div style={{ height: "60vh", paddingTop: 100 }}>
        <h2 style={{ color: "#00ACED" }}>Create your account</h2>
        <span>
          <Link to="/">
            <img src={switterLogo} width="40px" height="40px" alt="logo" />
          </Link>
        </span>

        <form onSubmit={this.submit}>
          <br />
          <Form.Group style={{ width: "49vh", marginInlineStart: 550 }}>
            <Form.Label>Avatar name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pick a name"
              name="username"
              required
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group
            controlId="formGroupEmail"
            style={{ width: "49vh", marginInlineStart: 550 }}
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group
            controlId="formGroupPassword"
            style={{ width: "49vh", marginInlineStart: 550 }}
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group
            controlId="formGroupPassword"
            style={{ width: "49vh", marginInlineStart: 550 }}
          >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="c_password"
              required
              value={this.state.c_password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button
            type="submit"
            variant="outline-primary"
            style={{ width: "49vh" }}
          >
            Sign up
          </Button>
          <div>
            <h1>{this.state.dbMsg}</h1>
          </div>
        </form>
      </div>
    );
  }
}
