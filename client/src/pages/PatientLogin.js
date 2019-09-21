import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class PatientLogin extends Component {
  state = {
    patients: [],
    email: "",
    password: ""
  };

  
  // loadPatientByEmail = () => {
  //   API.getPatientByEmail(this.state.email)
  //     .then(res =>
  //       this.setState({ patient: res.data[0], email: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getPatientByEmail({
      email:this.state.email})
      .then(res => this.setState({ patients: res.data }))
      .catch(err => console.log(err));
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
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                login
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Patient Information</h1>
            </Jumbotron>
            {this.state.patients.length ? (
              <List>
                {this.state.patients.map(patient => (
                  <ListItem key={patient._id}>
                    <Link to={"/patients/" + patient._id}>
                      <strong>
                        {patient._id} | {patient.name} | {patient.password} | {patient.email} |{patient.ssn} | {patient.primaryDrInfo} | {patient.insuranceInfo} |
                      </strong>
                      {patient.lifechathistory}
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
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

export default PatientLogin;
