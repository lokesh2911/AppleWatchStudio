import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import model42mm from "../../assets/Images/model42mm.png"; // Constant case image
import Case1 from "../../assets/Images/Case1.png"; // Example band images
import Case2 from "../../assets/Images/Case2.png";
import Case from '../../assets/Images/Case.png';

function Preview() {
  const [currentBand, setCurrentBand] = useState(0); // Current selected band
  const bands = [Case1, Case2]; // List of band images

  // Function to navigate bands (left or right)
  const navigateBand = (direction) => {
    if (direction === "left") {
      setCurrentBand((prev) => (prev === 0 ? bands.length - 1 : prev - 1));
    } else {
      setCurrentBand((prev) => (prev === bands.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="feature-container">
      <div className="watch-section">
        {/* Carousel */}
        <div className="carousel">
          <button className="nav-btn" onClick={() => navigateBand("left")}>
            {"<"}
          </button>
          <div className="carousel-container">
            {/* Display moving bands */}
            <div className="band-list">
              {bands.map((band, index) => (
                <img
                  key={index}
                  src={band}
                  alt={`Band ${index + 1}`}
                  className={`band-image ${
                    index === currentBand ? "active-band" : ""
                  }`}
                  style={{
                    opacity: index === currentBand ? 1 : 0.5,
                    transform:
                      index === currentBand
                        ? "scale(1.2)"
                        : "scale(0.8)",
                  }}
                />
              ))}
            </div>
            {/* Constant case image */}
            <img
              src={model42mm}
              alt="Apple Watch Case"
              className="watch-image"
            />
          </div>
          <button className="nav-btn" onClick={() => navigateBand("right")}>
            {">"}
          </button>
        </div>

        <h4 className="product-title">APPLE WATCH SERIES 10</h4>
        <p className="product-description">Jet Black Aluminum Case</p>
        <p className="product-price">From $429</p>
      </div>
    </div>
  );
}

export default Preview;
