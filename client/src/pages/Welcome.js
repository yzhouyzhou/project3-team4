import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import Box from '@material-ui/core/Box';
import PatientLogin from "../components/Login";
import Image from "../components/Background";
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

function Welcome() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Image>
          </Image>
        </Grid>
        <Grid item xs={6}>
          <PatientLogin></PatientLogin>
        </Grid>
      </Grid>
    </div>
  );
}

export default Welcome;

