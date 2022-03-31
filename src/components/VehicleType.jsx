/* eslint-disable react/jsx-key */
import React from "react";
import Option from "./Option";
import $ from "jquery";

function VehicleType() {
  const options = [
    "Vehicle Type",
    "Economy",
    "Premium",
    "Compact",
    "Pickup",
    "Standard",
    "Intermediate SUV",
    "Luxury",
    "Sporty"
  ];

  $("select").on("change", function () {
    const optionText = $(this).find("option").filter(":selected").text();
    $(".card").each(function () {
      if (optionText === "Vehicle Type") {
        $(".card").show();
      } else if ($(this).find(".type").text() !== optionText) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });

  return (
    <div className="select">
      <select>
        {options.map((option) => (
          <Option name={option} />
        ))}
      </select>
    </div>
  );
}

export default VehicleType;
