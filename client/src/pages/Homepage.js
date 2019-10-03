import React, { Component } from "react";
import Dashboard from "../components/Dashboard/dashboard";
import Wrapper from "../components/Wrapper";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import APIC from './colorApic.png';

class Homepage extends Component {
  state = {
    patient: this.props.location.state.patient ?
      this.props.location.state.patient
      :
      sessionStorage.getItem("patient")

  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    sessionStorage.setItem("patient", this.props.location.state.patient);
    console.log(this.state.patient);
  }

  render() {
    return (
      <div>
        <Dashboard
          name={this.state.patient.name}>
        </Dashboard>
        <Wrapper>
          <Container fixed>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <div style={{
                  fontFamily: 'Ubuntu',
                }}>
                  <h1
                    style={{
                      fontFamily: 'Ubuntu',
      fontFamily: 'Ubuntu',
            marginBottom: '30px',
            borderStyle: 'solid',
            borderWidth: '5px',
            display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
                    }}>
                    {this.state.patient.name}&nbsp;&nbsp;&nbsp;&nbsp;
                    WELCOME TO APIC
          <img src={APIC} alt="ApicLogo" id="apImage"
                      style={{
                        width: '230px',
                      }} /></h1>
                  <h3>About Us</h3>
                  <p>APIC (Assistance Processing Interface Compound) is an application interface for patients needing immediate care and utility services. Equipped with the latest technology, APIC allows users to connect directly to their Primary Providers' office and check in for emergency visits for your help and convenience. Cut the line, save the wait. We believe our community deserves the best Healthcare service available.</p>
                  <h5>Explore Our Patient Features!</h5>
                  <h6>Emergency</h6>
                  <p>Need to check-in at your appointment but don't want the wait? Check in at our Emergency services to connect directly with your healthcare provider through our EPIC API. Check in <a href="/liveChat">here!</a></p>
                  <p></p>
                  <h6>Live Chat</h6>
                  <p>APIC's implementation team works side by side with you to make sure you receive quick and accessible service wherever you are. With our LiveChat feature, talk directly with live doctors to attend to your immediate needs and get quick and useful medical assistance. Designated 24/7 support at your fingertips. Click <a href="/liveChat">here</a> for help!</p>
                  <h6>Location</h6>
                  <p>Need a prescription? With our location feature get access to the local pharmacies near you. Go <a href="/location">here</a> to check the locations near you.</p>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Wrapper>
      </div>
    );
  }
}


export default Homepage;
