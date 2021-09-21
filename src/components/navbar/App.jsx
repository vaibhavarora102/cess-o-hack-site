import React from "react";
// import "./styles.scss";
import "./App.css";
// import MytypedComponent from "../typing-effect/typing.js"
// import TOGGLE from "../toggle-button/toggle";
import HomePage from "../Main-page/HomePage";
// import logo from "./logoo.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

import Discord from "../Routes/Discord";
import Twitter from "../Routes/Twitter";
import Linkedin from "../Routes/LinkedIn";
import Instagram from "../Routes/Instagram";
import Devpost from "../Routes/Devpost";

import Logo from "./logo.png";
export default function NAVBAR() {
  function displayMenu() {
    const toggler = document.getElementById("menu");
    toggler.classList.toggle("enable");
  }

  return (
    <Router>
      <div>
        <nav style={{backgroundColor: "#121930"}}>
          <div className="nav__left">
            <img src={Logo} alt="" />
            <h1>Hackathon 3.O</h1>
          </div>
          <div className="nav__right" id="menu">
            <NavLink to="/contact">
              <span className="links">Home</span>{" "}
            </NavLink>
            <NavLink to="/contact">
              <span className="links">About us </span>{" "}
            </NavLink>
            <NavLink to="/contact">
              <span className="links">Tracks</span>{" "}
            </NavLink>
            <NavLink to="/contact">
              <span className="links">Prices </span>{" "}
            </NavLink>
            <NavLink to="/contact">
              <span className="links">Sponsors </span>{" "}
            </NavLink>
            <NavLink to="/contact">
              <span className="links">FAQ </span>{" "}
            </NavLink>
          </div>
          <div className="menu__icon">
            <MenuIcon
              className="menuIcon"
              fontSize="large"
              onClick={displayMenu}
            />
          </div>
        </nav>

        <Switch>
          <Route path="/discord" exact component={Discord} />
          <Route path="/linkedin" exact component={Linkedin} />
          <Route path="/devpost" exact component={Devpost} />
          <Route path="/twitter" exact component={Twitter} />
          <Route path="/instagram" exact component={Instagram} />
          <Route path="/contact">
            <HomePage />
          </Route>
          <Route path="/links">
            <HomePage />
          </Route>
          <Route path="/projects">
            <HomePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Projects() {
  return <h2>Projects here</h2>;
}

function Contact() {
  return <h2>contact info</h2>;
}

function Links() {
  return <h2>Home</h2>;
}
