import React from "react";
import "./PlacesToVisit.css";

const PlacesToVisit = () => {
  return (
    <section className="places-to-visit">
      <h1>Places to Visit in Autumn</h1>
      <div className="places">
        <div className="place">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5h_O3Ab3gpJawitcknds9otgPM2Zh7VSPCg&s"
            alt="Mountain Loop"
          />
          <h3>Mountain Loop</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Location: 0.3 miles</p>
        </div>
        <div className="place">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSx2MefuBtJm3SIc3THLBRuOI5SZM28VdYw&s"
            alt="National Park"
          />
          <h3>National Park</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Location: 0.2 miles</p>
        </div>
        <div className="place">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAooalNMYN-AjcoLZRe3zOGpQc5zVcuOUFGg&s"
            alt="Canyon Trail"
          />
          <h3>Canyon Trail</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Location: 0.6 miles</p>
        </div>
      </div>
    </section>
  );
};

export default PlacesToVisit;
