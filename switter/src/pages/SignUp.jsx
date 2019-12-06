// Credit to Poorva:
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import switterLogo from "../csc667-logo.svg";
import { Link, Redirect  } from "react-router-dom";
import axios from "axios";
//import { validateAll } from "indicative";

export default class SignUp extends React.Component {
  state = {
    id: 1,
    username: "",
    password: "",
    email: "",
    c_password: ""
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
          alert("You are now registered. Please login to use Switter.");
          console.log("Data has been sent to the server", res);
          this.resetUserdataInputs();
          //alert("User is now signed up. Happy Switting!");
          window.location.href="login"

          //this.redirecttologin();
          // this.getUserPost();
        })
        
        .catch(e => {
          alert("Username already taken.!!");
          console.log("Internal server error", e.res);
        });
    }
  };

  // redirecttologin = ()=>{
  //   console.log('Click happened');
  //   return <Redirect to="/login" />;
  // }



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

        {/* NOTE: add home btn logo to return to homepage */}
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
          {/* <ButtonToolbar> */}
          <Button
            type="submit"
            variant="outline-primary"
            style={{ width: "49vh" }}
          >Sign up
            {/* <Link to='/profile'>submit</Link> */}
          </Button>
        </form>
      </div>
    );
  }
}
