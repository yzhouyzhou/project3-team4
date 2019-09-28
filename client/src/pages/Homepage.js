import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function HomepageLogin() {
  return (
    <Container fluid>
      <Row>
        

        <Col size="md-12">
          <Jumbotron>
            <h1>Homepage Login</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default HomepageLogin;