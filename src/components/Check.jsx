/* eslint-disable react/prop-types */
import React, { useState } from "react";
import LocationIcon from "./LocationIcon";

function Check(props) {
  const [hidden, setHidden] = useState("");

  return (
    <div
      className="detail--container"
      onMouseOver={() => setHidden("hidden")}
      onMouseOut={() => setHidden("")}>
      <div className={props.isStateCompleted ? "check" : "check not-checked"}>
        <div className={"check-details hidden" + hidden} onMouseOut={() => setHidden("")}>
          <div className="check-arrow"></div>
          <div className="check-top">
            <LocationIcon />
            <spam>Chicago O&apos;Hare International Airport</spam>
          </div>
          <div className="check-edit">
            <a href="google.com">Edit</a>
          </div>
        </div>
        {props.isStateCompleted ? (
          <img className="check-img" src="images/check.svg" alt="" />
        ) : (
          <p className="last-step">4</p>
        )}
      </div>
      <p className="details--label multiline">{props.description}</p>
    </div>
  );
}

export default Check;
