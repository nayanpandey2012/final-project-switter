import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import switterLogo from "../csc667-logo.svg";
import { Container, Col } from "react-bootstrap";
import { Button, Navbar, Form } from "react-bootstrap";
import { connect } from 'react-redux';

const ProfileLable = ({ username }) => {
  return (
    <Container>
      <Navbar bg="white">
        <Navbar.Brand href="/profile" style={logoStyle.float}>
          <img src={switterLogo} width="40" height="40" alt="logo" />
        </Navbar.Brand>
      </Navbar>
      <form>
        <Form.Group controlId="tweet_submit">
          <Form.Control
            type="text"
            placeholder="What's on your mind"
            name="message"
          />
        </Form.Group>
        <Button 
          style={{marginInlineStart:"600px"}} 
          type="submit"
          onClick={e => e.preventDefault()}
        >
          Tweet
        </Button>
      </form>
      <Col>
        <p>
          <b>
          <h2>Welcome back {username}</h2>
          </b>
        </p>
      </Col>
    </Container>
  );
}

const mapStateToProps = state => ({
  username: state.userReducer.username,
});

export default connect(mapStateToProps, null)(ProfileLable);

// CSS: 
const logoStyle = {
  position: {
    float: "left !important",
    marginTop: "-15px !important"
  }
};

// var userName = "User1";
// class ProfileLabel extends React.Component {
//   render() {
//     return (
//       <Container>
//         <Navbar bg="white">
//           <Navbar.Brand href="/profile" style={logoStyle.float}>
//             <img src={switterLogo} width="40" height="40" alt="logo" />
//           </Navbar.Brand>

//         </Navbar>
//         <form>
//           <Form.Group controlId="tweet_submit">
//             <Form.Control
//               type="text"
//               placeholder="What's on your mind"
//               name="message"
//             />
//           </Form.Group>
//           <Button 
//             style={{marginInlineStart:"600px"}} 
//             type="submit"
//             onClick={e => e.preventDefault()}
//           >
//             Swit
//           </Button>
//         </form>
//         <Col>
//           <p>
//             <b>
//               {/* <h2>{userName}</h2> */}
//               <h2>username</h2>
//             </b>
//           </p>
//         </Col>
//       </Container>
//     );
//   }
// }

// export default ProfileLabel;




