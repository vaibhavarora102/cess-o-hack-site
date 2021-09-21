import React from "react";
import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js";

import {TOP_SECTION, SOCIALS} from "../../Module/General";

function Btn(props) {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <p style={{fontSize: "5rem", marginBottom: "-3rem"}}>
        {TOP_SECTION.subTitle}
      </p>
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
}

function Myinfo() {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
        {" "}
        <Btn class="register" type="Register " overlay="Hackers registration" />
      </a>
    </div>
  );
}

export {Btn, Myinfo};
