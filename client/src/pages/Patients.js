import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Patients extends Component {
  state = {
    patients: [],
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    ssn: "",
    primaryDrInfo: "",
    insuranceInfo: ""
  };

  componentDidMount() {
    this.loadPatients();
  }

  loadPatients = () => {
    API.getPatients()
      .then(res =>
        this.setState({ patients: res.data, name: "", email: "", password: "" })
      )
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
    if (this.state.name) {
      API.savePatient({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        address: this.state.address,
        ssn: this.state.ssn,
        primaryDrInfo: this.state.primaryDrInfo,
        insuranceInfo: this.state.insuranceInfo
      })
        .then(res => this.loadPatients())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Register?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
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
              <Input
                value={this.state.phone}
                onChange={this.handleInputChange}
                name="phone"
                placeholder="phone"
              />
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="address"
              />
              <Input
                value={this.state.ssn}
                onChange={this.handleInputChange}
                name="ssn"
                placeholder="SSN"
              />
              <Input
                value={this.state.primaryDrInfo}
                onChange={this.handleInputChange}
                name="primaryDrInfo"
                placeholder="primaryDrInfo"
              />
              <Input
                value={this.state.insuranceInfo}
                onChange={this.handleInputChange}
                name="insuranceInfo"
                placeholder="insuranceInfo"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Register
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              
              <h1>Patients On My List</h1>
            </Jumbotron>
            {this.state.patients.length ? (
              <List>
                {this.state.patients.map(patient => (
                  <ListItem key={patient._id}>
                    <Link to={"/patients/" + patient._id}>
                      <strong>
                        {patient._id} | {patient.name} | {patient.password} |
                        {patient.email} |{patient.ssn} | {patient.primaryDrInfo} |
                        {patient.insuranceInfo} |
                      </strong>
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

export default Patients;
