import React from "react";
import clsx from "clsx";
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
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountBox from "@material-ui/icons/AccountBox";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import FormControl from "@material-ui/core/FormControl";
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
            placeholder=""
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
            placeholder=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-address-required"
            label="Personal Address"
            placeholder=""
            className={classes.textField}
            style={{ width: 400 }}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-info-required"
            label="Doctor's Phone Number"
            placeholder=""
            className={classes.textField}
            style={{ width: 250 }}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-insurance-required"
            label="Insurance Information"
            placeholder=""
            className={classes.textField}
            style={{ width: 400 }}
            margin="normal"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Update Information
            <Icon className={classes.rightIcon}>send</Icon>
          </Button>
        </form>
      </Wrapper>
    </div>
  );
}
