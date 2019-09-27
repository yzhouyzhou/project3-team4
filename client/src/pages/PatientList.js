import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class PatientList extends Component {
  state = {
    patients: []
  };

  componentDidMount() {
    this.loadPatients();
  }

  loadPatients = () => {
    API.getPatients()
      .then(res =>
        this.setState({ patients: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Patients On The List</h1>
            </Jumbotron>
            {this.state.patients.length ? (
              <List>
                {this.state.patients.map(patient => (
                  <ListItem key={patient._id}>
                    <Link to={"/patients/" + patient._id}>
                      <strong>
                        {patient._id} | {patient.name} | {patient.password} | {patient.email} |{patient.ssn} | {patient.primaryDrInfo} | {patient.insuranceInfo} |
                      </strong>
                      {patient.lifechathistory ? (patient.lifechathistory.length ?
                        patient.lifechathistory.map(chat =>
                          chat.chathistory + " ") : "")
                        : ""}
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Patients to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PatientList;
