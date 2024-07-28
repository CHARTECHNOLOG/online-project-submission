import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Image1 from "../src/Images/LASUSTECH.webp";
import "../src/Home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <>
      <Container className="content">
        <Image src={Image1} className="school-logo" />
        <h1>Lagos State University of Science and Technology</h1>
        <h2>Department of Computer Science</h2>
        <article>| Online Project Submission Portal|</article>
        <h3 className="account-creation">Create an Account</h3>
        <Row className="for-the-buttons">
          <Col>
            <button className="btn-1">Lecturer?</button>
          </Col>
          <Col>
            <button className="btn-2">Student?</button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;