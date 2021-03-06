import React from "react";
import "./logoSection.css";

import logo1 from "./logo4.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";

import hacklogo from "./hacklogo.png";
import {MIDDLE_SECTION} from "../../Module/General";

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout" id="about">
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Logo() {
  var myLogo;
  if (MIDDLE_SECTION.LOGO_EFFECT) {
    myLogo = (
      <div className="logoS">
        <img className="Logo logo1" src={hacklogo} alt="Limbohacks" />
        <img className="Logo logo2" src={logo2} alt="Limbohacks" />
        <img className="Logo logo3" src={logo3} alt="Limbohacks" />
      </div>
    );
  } else {
    myLogo = (
      <div className="logoS">
        <img className="Logo logo1" src={hacklogo} alt="Limbohacks" />
      </div>
    );
  }
  return myLogo;
}

export {Logo, LogoSectionAbout};
