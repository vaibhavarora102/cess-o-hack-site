import React from "react";
import "./team.css";

function Member(props) {
  return (
    <div className="member">
      <img src={props.img} alt="Limbo hack"></img>
      <div className="members-link">
        <h3>{props.name}</h3>
        <p>{props.role}</p>
        <a>
          <i class="fab fa-2x fa-github"></i>
        </a>
        <a>
          <i class="fab fa-2x fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export {Member};
