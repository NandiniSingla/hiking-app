import React from "react";
import "./Mountaineering.css";

const Mountaineering = () => {
  return (
    <div className="mountaineering">
      <div className="mountaineering-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnMhRVOj6cfCstqJCSYFE7_XBiZ8D11i8RFw&s"
          alt="Mountaineering"
          className="mountaineering-image"
        />
        <div className="mountaineering-text">
          <h2>Mountaineering Ice Climbing</h2>
          <h3>2. ACTIVITIES</h3>
          <p>
            Kundalini is the most classic yoga. Its origin is in the Raya Yoga
            of Patanjali and other classical texts such as Bhagavad Gita and
            Hatha Yoga Pradipika.
          </p>
          <p>17 modules divided into 5 weekends</p>
          <p>Start: April 15</p>
          <p>Price: $900</p>
        </div>
      </div>
    </div>
  );
};

export default Mountaineering;
