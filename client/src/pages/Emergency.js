import React from "react";
import clsx from "clsx";
import "date-fns";
import API from "../utils/API";
import Dashboard from "../components/Dashboard/dashboard";
import LinearProgress from "@material-ui/core/LinearProgress";
import Wrapper from "../components/Wrapper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountBox from "@material-ui/icons/AccountBox";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import FormControl from "@material-ui/core/FormControl";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 300
  },
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid grey",
    borderRadius: "10px 10px 10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 8, 8, 8)
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    age: "",
    multiline: "Controlled",
    showPassword: false
  });

  const [open, setOpen] = React.useState(false);

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2019-01-01T12:00:00")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickShowSSN = () => {
    setValues({ ...values, showSSN: !values.showSSN });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const timeout = event => {
    setTimeout( () => { alert("Your report has been sent. You are now checked in!") }, 3500)
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    timeout();
    setTimeout( () => { setOpen(false) }, 4500);
  };
  const handleMouseDownSSN = event => {
    event.preventDefault();
  };

  return (
    <div>
      <Dashboard></Dashboard>
      <Wrapper>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="outlined-name"
            label="Full Name"
            className={classes.textField}
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBox />
                </InputAdornment>
              )
            }}
          />
          <TextField
            required
            id="outlined-email-required"
            label="Email"
            placeholder="abc@gmail.com"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              id="adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="SSN">Social Security Number</InputLabel>
            <Input
              id="adornment-ssn"
              type={values.showSSN ? "text" : "password"}
              value={values.SSN}
              onChange={handleChange("SSN")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowSSN}
                    onMouseDown={handleMouseDownSSN}
                  >
                    {values.showSSN ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <TextField
            required
            id="outlined-number-required"
            label="Phone Number"
            placeholder="555-555-555"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-address-required"
            label="Personal Address"
            placeholder="6868 Lane Rd."
            className={classes.textField}
            style={{ width: 400 }}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-drAddress-required"
            label="Scheduled Doctor"
            placeholder="First and Last Name"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-hospital-address-required"
            label="Hospital Address"
            placeholder="Hospital"
            className={classes.textField}
            style={{ width: 400 }}
            margin="normal"
            variant="outlined"
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={clsx(classes.margin, classes.textField)}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Select Appointment Date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
            <KeyboardTimePicker
              className={clsx(classes.margin, classes.textField)}
              margin="normal"
              id="time-picker"
              label="Appointment Time"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            id="outlined-service"
            label="What service are you requesting?"
            style={{ margin: 8 }}
            helperText="Medical care, recommendations, prescription, etc."
            fullWidth
            multiline={true}
            rows={2}
            rowsMax={3}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="outlined-report"
            label="What would you like to report?"
            style={{ margin: 8 }}
            helperText="Please describe what you may be feeling (symptoms, concerns, questions)."
            fullWidth
            multiline={true}
            rows={4}
            rowsMax={4}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleOpen}
          >
            Check In
            <Icon className={classes.rightIcon}>send</Icon>
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            className={classes.modal}
            open={open}
            // onClose={handleClose}
            // disableBackdropClick
            closeAfterTransition
            onRendered={handleClose}
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 100
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h4 id="transition-modal-title">Processing Request</h4>
                <br>
                </br>
                <br></br>
                <LinearProgress />
                <br />
                <LinearProgress color="secondary" />
              </div>
            </Fade>
          </Modal>
        </form>
      </Wrapper>
    </div>
  );
}

//setTimeout( () => { alert("Your report has been sent. You are now checked in!") }, 5000)

// onClick={() => {
            //   alert("Your report has been sent. You are now checked in!");
            // }}