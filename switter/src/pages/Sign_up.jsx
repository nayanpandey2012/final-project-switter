// Credit to Poorva:
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonToolbar, Form } from "react-bootstrap";
import switterLogo from "../csc667-logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Sign_up extends React.Component {
  state = {
    id: 1,
    username: "",
    password: "",
    email: ""
    // users: []
  };

  // componentDidMount = () => {
  //   this.getUserPost();
  // };

  // getUserPost = () => {
  //   axios
  //     .get("/api")
  //     .then(res => {
  //       const data = res.data;
  //       this.setState({ users: data });
  //       console.log("Data has been received!!");
  //     })
  //     .catch(() => {
  //       alert("Error finding data");
  //     });
  // };

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
      email: this.state.email
    };

    axios({
      url: "/api/usersave",
      method: "POST",
      data: userpayload
    })
      .then(() => {
        console.log("Data has been sent to the server");
        this.resetUserdataInputs();
        // this.getUserPost();
      })
      .catch(() => {
        console.log("Internal server error");
      });
  };

  resetUserdataInputs = () => {
    this.setState({
      username: ""
    });
  };

  render() {
    console.log("user State: ", this.state);
    return (
      <div style={{ height: "60vh", paddingTop: 100, paddingLeft: 550 }}>
        <h2 style={{ color: "#00ACED" }}>Create your account</h2>

        {/* NOTE: add home btn logo to return to homepage */}
        <span>
          <Link to="/">
            <img src={switterLogo} width="40px" height="40px" alt="logo" />
          </Link>
        </span>

        <form onSubmit={this.submit}>
          <Form.Group style={{ width: "49vh" }}>
            <Form.Label>Avatar name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pick a name"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupEmail" style={{ width: "49vh" }}>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword" style={{ width: "49vh" }}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword" style={{ width: "49vh" }}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="c_password"
              value={this.state.c_password}
              onChange={this.handleChange}
            />
          </Form.Group>
          {/* <ButtonToolbar> */}
          <Button
            type="submit"
            variant="outline-primary"
            style={{ width: "49vh" }}
          >
            {/* <Link to='/profile'>Sign up</Link> */}Submit
          </Button>
          {/* </ButtonToolbar> */}
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </div>
    );
  }
}
