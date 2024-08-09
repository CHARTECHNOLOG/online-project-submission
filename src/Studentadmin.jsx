import React from "react";
import Container from "react-bootstrap/Container";
import "../src/studentadmin.css";
import Image2 from "../src/Images/images.jpeg";
import Image from "react-bootstrap/esm/Image";

const Studentadmin = () => {
  return (
    <>
      <Container>
        <div className="first-container"></div>
        <div className="main-container">
          <Image src={Image2} className="admin-logo"></Image>
          <h1>Welcome to the Online Student Project Submission Portal</h1>
        </div>
        <div className="second-container"></div>
        <div className="content">
          <h2>Student Portal</h2>
        </div>
      </Container>
    </>
  );
};

export default Studentadmin;
