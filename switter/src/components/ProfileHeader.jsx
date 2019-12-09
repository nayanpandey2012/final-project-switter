import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import switterLogo from "../csc667-logo.svg";
import { Container } from "react-bootstrap";
import Tweets from './Tweet';
import { Button, Navbar, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import { getAllTweets} from '../redux/actions/noteActions';

const ProfileHeader = ({ dispatch }) => {

  React.useEffect(() => {
    dispatch(getAllTweets());
  }, []);

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
          
          onClick={e => e.preventDefault()}
        >
          Tweet
        </Button>
      </form>
      <div>
        <Tweets />
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  tweets: state.notesReducer.tweets,
  message: state.notesReducer.message,
  newTweets: state.notesReducer.newTweets,
  username: state.userReducer.username,
});

export default connect(mapStateToProps, null)(ProfileHeader);

// CSS: 
const logoStyle = {
  position: {
    float: "left !important",
    marginTop: "-15px !important"
  }
};


  //  getBlogPost = () => {
  //     axios
  //       .get("/api")
  //       .then(res => {
  //         const data = res.data;
  //         this.setState({ tweets: data });
  //         console.log("Data has been received!!");
  //       })
  //       .catch(() => {
  //         alert("Error finding data");
  //       });
  //   };

//   submit = e => {
//     e.preventDefault();

//     const payload = {
//       id: 1,
//       username: "user1",
//       message: this.state.message,
//       likes: 1
//     };

//     axios({
//       url: "/api/save",
//       method: "POST",
//       data: payload
//     })
//       .then(() => {
//         console.log("Data has been sent to the server");
//         this.resetUserInputs();
//         this.getBlogPost();
//       })
//       .catch(() => {
//         console.log("Internal server error");
//       });
//   };

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




