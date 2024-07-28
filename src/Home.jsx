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
            <button className="btn-1">
              <a href="/Lecturer">Lecturer?</a>
            </button>
          </Col>
          <Col>
            <button className="btn-2">
              <a href="/Student">Student?</a>
            </button>
          </Col>
        </Row>
        <h3 className="account-creation">Already have an Account?</h3>
        <Row>
          <button className="btn-3">
            <a href="/Login">Login</a>
          </button>
        </Row>
      </Container>
    </>
  );
};

export default Home;
