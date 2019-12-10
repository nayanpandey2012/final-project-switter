import React from "react";
import Tweets from "../components/Tweets";
import ProfileTweeting from "../components/ProfileTweeting";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileSidebar from '../components/ProfileSidebar';
import { Container,  Col, Row } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col xs={8}>
          <ProfileTweeting />
        </Col>
        <Col xs={4}>
          <ProfileSidebar />
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
