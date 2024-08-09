import React from "react";
import Button from "react-bootstrap/Button";

import "../src/Login.css";
import Container from "react-bootstrap/Container";

const Login = () => {
  return (
    <>
      <Container fluid className="Form-Container">
        <div className="heading-text">
          <h1>Choose which Account you want to login into</h1>
        </div>
        <div className="btn-container">
          <Button variant="primary" type="submit" className="btn-login-1">
            <a href="/"> Lecturer ?</a>
          </Button>
          <Button variant="primary" type="submit" className="btn-login-1">
            <a href="/"> Student ?</a>
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Login;
