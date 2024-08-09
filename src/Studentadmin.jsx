import React from "react";
import Container from "react-bootstrap/Container";
import "../src/studentadmin.css";
import Image2 from "../src/Images/images.jpeg";
import Image from "react-bootstrap/esm/Image";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

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

          <div className="box">
            <article>
              Ensure you Provide the correct informations needed before
              uploading your project and make sure you input the correct
              Graduation Year
            </article>
            <br></br>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <article>Full Name</article>
                </Form.Label>
                <Form.Control type="email" placeholder="Enter your full name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <article>Email address</article>
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <article>Department</article>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter your department" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <article>Matriculation Number</article>
                </Form.Label>
                <Form.Control type="email" placeholder="Enter matric number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <article>Project Topic</article>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your project topic"
                />
              </Form.Group>
              <Form.Label>
                <article>Year of Graduation</article>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="select-option-container "
              >
                <option>2023</option>
                <option value="2024">2024</option>
                <option value="2">2025</option>
                <option value="4">2026</option>
                <option value="5">2027</option>
                <option value="6">2028</option>
                <option value="7">2029</option>
                <option value="8">2030</option>
                <option value="9">2031</option>
                <option value="10">2032</option>
                <option value="11">2033</option>
                <option value="12">2034</option>
                <option value="13">2035</option>
              </Form.Select>
            </Form>
          </div>
        </div>
      </Container>
      <Card className="footer-container">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              <a href="/Home">Home</a>
              <a href="/Student">Student</a>
              <a href="/Login">Login</a>
            </p>
            <footer className="blockquote-footer">
              &copy; Charity Technologies 2024
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
};

export default Studentadmin;
