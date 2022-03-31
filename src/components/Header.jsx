import React from "react";
import CalendarIcon from "./CalendarIcon";
import LocationIcon from "./LocationIcon";
import VehicleType from "./VehicleType";
import PassengerCapacity from "./PassengerCapacity";

function Header() {
  return (
    <div className="header">
      <div className="header--left-side">
        <h1>choose a vehicle class</h1>
        <div className="description--header--left-side">
          Vehicles available on the date{" "}
          <a href="google.com">
            <CalendarIcon /> fri, May 11 12:00 PM-Sat, May 12 12:00 PM
          </a>
          {" in: "}
          <a href="google.com">
            <LocationIcon />
            Chicago O&apos;Hare International Airport
          </a>
        </div>
      </div>
      <div className="header--right-side">
        <VehicleType />
        <div className="select is--passenger">
          <PassengerCapacity />
        </div>
      </div>
    </div>
  );
}

export default Header;
