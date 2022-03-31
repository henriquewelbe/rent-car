/* eslint-disable react/prop-types */
import React from "react";
import _ from "lodash";

function Card(props) {
  return (
    <div className={"card" + props.hidden}>
      <div className="card--top">
        <div className="card--top--left">
          <div className="type">{props.type}</div>
          <div className="model">{props.model} or similar</div>
          <div className="mode">{props.mode}</div>
        </div>
      </div>
      <div className="card--top--right">
        <a href="google.com">More details </a>
      </div>
      <div className="card--image">
        <img className="car-image" src={"images/" + _.kebabCase(props.type) + ".png"} alt="" />
      </div>
      <div className="card--bottom">
        <div className="bottom--row-1">
          <div className="pay-later">pay later</div>
          <div className="line"></div>
        </div>
        <div className="bottom--row-2">
          <div className="price-day">
            $ {props.priceDay}
            <br />
            <spam className="per-day">Per Day</spam>
          </div>
          <div className="price-day">
            $ {props.priceTotal}
            <br />
            <spam className="per-day">Total</spam>
          </div>
          <a href="google.com" className="price-details">
            Price details
          </a>
        </div>
        <div className="bottom--row-3">
          <a href="google.com" className="button">
            select car
          </a>
          <a href="google.com" className="button secondary">
            compare car
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
