/* eslint-disable react/prop-types */
import React from "react";

function Select(props) {
  return (
    <select onChange={props.change} id="select">
      {props.options.map((option, index) => (
        <option value={option} key={index} className="option">
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
