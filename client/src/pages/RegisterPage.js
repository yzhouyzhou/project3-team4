import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import Register from "../components/Register";
import Image from "../components/Background";
import Grid from '@material-ui/core/Grid';

function Registration() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Image>
          </Image>
        </Grid>
        <Grid item xs={6}>
          <Register></Register>
        </Grid>
      </Grid>
    </div>
  );
}

export default Registration;

