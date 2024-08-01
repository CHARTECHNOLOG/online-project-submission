import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../src/Login.css";
import Container from "react-bootstrap/Container";

const Login = () => {
  return (
    <>
      <Container fluid className="Form-Container">
        <Form className="form-content">
          <h1>Login Page</h1>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>Full Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter your full name here ....."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>Enter your Password</b>
            </Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
