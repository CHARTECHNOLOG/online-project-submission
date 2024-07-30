import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../src/Lecturer.css";
import Container from "react-bootstrap/Container";

const Lecturer = () => {
  return (
    <>
      <Container fluid className="Form-Container">
        <Form className="form-content">
          <h1>Register Has a Lecturer</h1>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>Full Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter your full name here ....."
            />
          </Form.Group>
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

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Lecturer;
