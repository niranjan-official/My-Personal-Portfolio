import React from "react";
import "./Heading.css";
import Fade from "../../Styles/Fade";

function Heading({ name }) {
  return (
    <Fade viewonce={false} >
      <div className="heading">
        <hr style={{ borderColor: "aqua" }} className="first" />

        <h1>{name}</h1>

        <hr style={{ borderColor: "aqua" }} className=" last" />
      </div>
    </Fade>
  );
}

export default Heading;
