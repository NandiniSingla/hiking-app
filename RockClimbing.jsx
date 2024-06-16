import React from "react";
import "./RockClimbing.css";

const RockClimbing = () => {
  return (
    <div className="rockclimbing">
      <div className="rockclimbing-container">
        <div className="rockclimbing-text">
          <h1>Rock Climbing</h1>
          <br />
          <br />

          <h3>1. CLASSES AND EVENTS</h3>
          <br />

          <p>
            Kundalini is the most classic yoga. Its origin is in the Raya Yoga{" "}
            <br />
            of Patanjali and other classical texts such as Bhagavad Gita and{" "}
            <br />
            Hatha Yoga Pradipika.
          </p>
          <p>17 modules divided into 5 weekends</p>
          <p>Start: April 15</p>
          <p>Price: $900</p>
        </div>
        <div className="image-and-paragraph">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgk4vDvaVLW6jxebZI01pq0NIizPeCPFjfw&s"
            alt="Rock Climbing"
            className="rockclimbing-image"
          />
          <p>
            Walking in nature as a <br />
            recreational activity
          </p>
        </div>
      </div>
    </div>
  );
};

export default RockClimbing;
