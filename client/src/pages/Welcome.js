import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Welcome() {
  return (
    <Container fluid>
      <Row>
        
        <Col size="md-12">
          <Jumbotron>
            <h1>Welcome</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                :D
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
