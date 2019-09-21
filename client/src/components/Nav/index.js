import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        LifeChat
      </a>
      <a className="navbar-brand" href="/" >
        Login
        </a>
      <a className="navbar-brand" href="/Patients" >
        Register
        </a>
    </nav>
  );
}

export default Nav;
