import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class PatientLogin extends Component {
  state = {
    patient: {},
    email: "",
    password: ""
  };

  loadPatientByEmail = () => {
    API.getPatientByEmail(this.state.email)
      .then(res => {
        console.log(res.data);
        this.setState({ patient: res.data });
        console.log("now", this.state.patient);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadPatientByEmail();
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Login?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                LOGIN
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Patient Information {this.state.patient.name}</h1>
            </Jumbotron>
            {this.state.patient ? (
              <strong>
                {this.state.patient._id}
                {this.state.patient.name}  
                {this.state.patient.password}  
                {this.state.patient.email}  
                {this.state.patient.ssn}  
                {this.state.patient.primaryDrInfo}  
                {this.state.patient.insuranceInfo}  
                {this.state.patient.lifechathistory ? (this.state.patient.lifechathistory.length ?
                  this.state.patient.lifechathistory.map(chat =>
                    chat.chathistory + " ") : "")
                  : ""}
              </strong>
            ) : (
                <h3>No Patients to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PatientLogin;
