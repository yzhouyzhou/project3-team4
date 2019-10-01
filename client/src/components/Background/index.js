import React from "react";
import "./style.css";
import Background from './img.jpg';

function Image() {   
    return (
      <div id = "background">
    <img src={Background} alt="background" id = "backgroundImage"/>
    <h2 id = "picHeader">APIC</h2>
    </div>
    )}

  export default Image;