import React from "react";
import "./style.css";

function Header({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="header"
    >
      {children}
    </div>
  );
}

export default Header;