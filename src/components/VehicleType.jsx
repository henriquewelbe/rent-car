/* eslint-disable react/jsx-key */
import React from "react";
import Select from "./Select";

function VehicleType() {
  const vehicleOptions = [
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

  function handleChange() {
    const optionText = document.getElementById("select").value;
    document.querySelectorAll(".card").forEach((card) => {
      if (optionText === "Vehicle Type") {
        card.style.display = "";
      } else if (card.querySelector(".type").innerHTML !== optionText) {
        card.style.display = "none";
      } else {
        card.style.display = "";
      }
    });
  }

  return (
    <div className="select">
      <Select options={vehicleOptions} change={handleChange} />
    </div>
  );
}

export default VehicleType;
