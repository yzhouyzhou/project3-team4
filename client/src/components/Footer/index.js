import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copyright text-center py-3">© 2019 APIC
    </div>
      {/* <Link to="/home">
        <Button variant="outlined" color="primary">
          Go To Home
            </Button>
      </Link>
      <Link to="/patients">
        <Button variant="outlined" color="primary">
          Go To Register
              </Button>
      </Link> */}
      <Link to="/Patients/all">
        <Button variant="outlined" color="primary">
          Go To Patient List
              </Button>
      </Link>
    </footer>
  )
}
export default Footer;