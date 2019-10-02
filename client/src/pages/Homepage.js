import React from "react";
import Dashboard from "../components/Dashboard/dashboard";
import Wrapper from "../components/Wrapper";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';

function Homepage() {
  return (
    <div>
      <Dashboard></Dashboard>
      <Wrapper>
      <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>WELCOME TO APIC</h1>
          <h3>About Us</h3>
          <p>APIC is a interface for patients needing immediate care and utility services. Equipped with the latest technology, APIC allows users to connect directly to their Primary Providers' office and check in for emergency visits for your help and convenience. Cut the line, save the wait. We believe our patrons deserve the best Healthcare service available.</p>
          <h4>Explore Our Patient Features!</h4>
          <h6>Emergency</h6>
          <p>Need to check-in at your appointment but don't want the wait? Check in at our Emergency services to connect directly with your healthcare provider through our EPIC API. Check in <a href="/liveChat">here!</a></p>
          <p></p>
          <h6>Live Chat</h6>
          <p>APIC's implementation team works side by side with you to make sure you receive quick and accessible service wherever you are. With our LiveChat feature, you can talk directly with live doctors to attend to your immediate needs and get quick and useful medical assistance. Designated 24/7 support at your fingertips. Click <a href="/liveChat">here</a> for help!</p>
        </Grid>
      </Grid>
      </Container>
      </Wrapper>
    </div>
  );
}

export default Homepage;
