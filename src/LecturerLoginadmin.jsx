import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../src/Lecturer.css";
import Container from "react-bootstrap/Container";
import "../src/LecturerLoginadmin.css";
const LecturerLoginadmin = () => {
  return (
    <>
      <Container fluid className="Form-Container">
        <Form className="form-content">
          <h1>Lecturer login page</h1>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Email address</b>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>Department</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your department here...."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>Enter your Password</b>
            </Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            <a href="/Lectureradmin" className="Login-to-LecturerAdmin">
              Login
            </a>
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default LecturerLoginadmin;
