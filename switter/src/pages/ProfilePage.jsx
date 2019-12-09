import React from "react";
import Tweets from "../components/Tweets";
import ProfileHeader from "../components/ProfileHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileSidebar from '../components/ProfileSidebar';
import { Container,  Col, Row } from "react-bootstrap";

const ProfilePage = () => {

  
  return (
    <Container>
      <Row>
        <Col xs={8}>
          <ProfileHeader />
        </Col>
        <Col xs={4}>
          <ProfileSidebar />
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;