import React from "react";
import { Col, Row, Container } from "../components/Grid";
import PatientLogin from "./PatientLogin";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Welcome() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
            <PatientLogin></PatientLogin>
            <Link to="/home">
              {" "}
              <Button variant="outlined" color="primary">
                Go To Home
              </Button>
            </Link>
            <h1>Welcome</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
