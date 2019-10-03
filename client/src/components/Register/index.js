import React, { Component } from "react";
import API from "../../utils/API";
import { Link, Redirect } from "react-router-dom";
import { Input, FormBtn } from "../Form";
import Button from "@material-ui/core/Button";
import "./style.css";

class Register extends Component {
  state = {
    patient: {},
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    ssn: "",
    primaryDrInfo: "",
    insuranceInfo: "",
    registerStatus: false
  };

  loadPatientByEmail = () => {
    API.getPatientByEmail(this.state.email)
      .then(res => {
        console.log(res.data);
        this.setState({ patient: res.data });
        console.log("now", this.state.patient);
        this.setState({ registerStatus: true });
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
        .then(res => this.loadPatientByEmail())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div
        className="registerIn"
      >
        <h2 id="regHeader">REGISTER</h2>
        <span className="registerLink">
          Already registered? <a href="/">Login</a>
        </span>
        <form>
          <div id="fullName" className="formInput">
            <Input
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              placeholder="Full Name"
            />
          </div>
          <Input
            value={this.state.email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="Email"
          />
          <Input
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            placeholder="Password"
          />
          <Input
            value={this.state.phone}
            onChange={this.handleInputChange}
            name="phone"
            placeholder="Phone Number"
          />
          <Input
            value={this.state.address}
            onChange={this.handleInputChange}
            name="address"
            placeholder="Address"
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
            placeholder="Primary Doctors' Contact Information"
          />
          <Input
            value={this.state.insuranceInfo}
            onChange={this.handleInputChange}
            name="insuranceInfo"
            placeholder="Insurance Information"
          />
          <FormBtn onClick={this.handleFormSubmit}>REGISTER</FormBtn>
        </form>

        {this.state.registerStatus ?
          <Redirect to={{
            pathname: '/home',
            state: { patient: this.state.patient }
          }}
          /> : ""
        }

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

export default Register;
