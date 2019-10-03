import React from "react";
import "./style.css";
import Background from './img.jpg';
// import APIC from './APIC.png';

function Image() {   
    return (
      <div id = "background">
    <img src={Background} alt="background" id = "backgroundImage"/>
    {/* <img src={APIC} alt="APIC" id = "apicImage"/> */}
    <h2 id = "picHeader">APIC</h2>
    </div>
    )}

  export default Image;