import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../Form";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./style.css";

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
      <div
        className="signIn"
      >
          <h2 id = "header">SIGN IN</h2>
        <span className = "signUpLink">
          New to APIC? <a href="/register">Sign Up</a>
          {/* <i class="material-icons">face</i> */}
        </span>
        <form>
        <div id = "email" className = "formInput">
          <Input
            value={this.state.email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="Email"
          />
          </div>
        <div className = "formInput">
          <Input
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            type= "password"
            placeholder="Password"
          />
          </div>
          {/* make this check for same password */}
          <div id = "password" className = "formInput">
          <Input
            // value={this.state.password}
            // onChange={this.handleInputChange}
            name="password"
            type= "password"
            placeholder="Confirm Password"
          />
          </div>
          <FormBtn onClick={this.handleFormSubmit}
          >LOGIN</FormBtn>
        </form>
        <Link to="/home">
            <Button variant="outlined" color="primary">
              Go To Home
            </Button>
          </Link>
          <Link to="/patients">
              <Button variant="outlined" color="primary">
                Go To Register
              </Button>
            </Link>
            <Link to="/patientLogin">
              <Button variant="outlined" color="primary">
                Go To Patient Login
              </Button>
            </Link>
      </div>
    );
  }
}

export default PatientLogin;

{
  /* <Col size="md-6 sm-12">
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
          </Col> */
}
