import React from "react";
import Nav from "./Nav";
import Check from "./Check";
import Header from "./Header";
import Card from "./Card";
import cars from "../cars";

function App() {
  return (
    <div className="overflow">
      <div className="container">
        <Nav />
        <section className="main">
          <div className="details">
            <Check description="rental details" isStateCompleted="true" />
            <Check description="pick-up & return" isStateCompleted="true" />
            <Check description="vehicle" isStateCompleted="true" />
            <Check description="extras" />
          </div>
          <Header />
          <div className="cards-container">
            {cars.map((car) => (
              // eslint-disable-next-line react/jsx-key
              <Card
                type={car.type}
                model={car.model}
                mode={car.mode}
                priceDay={car.priceDay}
                priceTotal={car.priceTotal}
                hidden=""
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
