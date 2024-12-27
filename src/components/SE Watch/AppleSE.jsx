import { useState } from "react";
import "./index.css";
import SE42mm from "../../assets/Images/SE42mm.png"; // Image for 42mm size
import SE46mm from "../../assets/Images/SE46mm.png"; // Image for 46mm size
import SESlideView from "../../assets/Images/SESlideView.png";

function SEWatch() {
  const [view, setView] = useState("front"); // State to toggle between views
  const [sizeMenu, setSizeMenu] = useState(false); // State to toggle size options
  const [currentSize, setCurrentSize] = useState("42mm"); // Default size
  const [currentImage, setCurrentImage] = useState(SE42mm); // Default image for 42mm

  // Function to handle view change
  const handleViewChange = () => {
    setView(view === "front" ? "side" : "front");
  };

  // Function to toggle size menu
  const toggleSizeMenu = () => {
    setSizeMenu(!sizeMenu);
  };

  // Function to handle size selection
  const handleSizeSelection = (selectedSize) => {
    setCurrentSize(selectedSize);
    setCurrentImage(selectedSize === "42mm" ? SE42mm : SE46mm); // Update image
    setSizeMenu(false); // Close size menu
  };

  return (
    <div className="feature-container">
      <div className="watch-section">
        {view === "front" ? (
          <img src={currentImage} alt={`Apple Watch ${currentSize}`} className="watch-image" />
        ) : (
          <img src={SESlideView} alt="Apple Watch Side View" className="watch-image side-view" />
        )}

        <a href="#!" className="view-toggle-link" onClick={handleViewChange}>
          {view === "front" ? "Side view" : "Front view"}
        </a>

        <h4 className="product-title">APPLE WATCH SERIES 10</h4>
        <p className="product-description">
          {currentSize} Jet Black Aluminum Case with Black Solo Loop
        </p>
        <p className="product-price">From $429</p>
      </div>

      <div className="options">
        {!sizeMenu ? (
          <button className="option-button" onClick={toggleSizeMenu}>
            Size
          </button>
        ) : (
          <div className="size-options">
            <button
              className="option-button size-option"
              onClick={() => handleSizeSelection("42mm")}
            >
              42mm
            </button>
            <button
              className="option-button size-option"
              onClick={() => handleSizeSelection("46mm")}
            >
              46mm
            </button>
          </div>
        )}
        <button className="option-button">Case</button>
        <button className="option-button">Band</button>
      </div>
    </div>
  );
}

export default SEWatch;
