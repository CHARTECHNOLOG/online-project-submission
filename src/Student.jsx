import React from "react";
import "../src/Student.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Student = () => {
  return (
    <>
      <Container fluid className="Form-Container">
        <Form className="form-content">
          <h1>Register Has a Student</h1>
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>Create a Password</b>
            </Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>Matriculation Number</b>
            </Form.Label>
            <Form.Control type="text" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>Year of Graduation</b>
            </Form.Label>
            <Form.Control type="number" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Student;
