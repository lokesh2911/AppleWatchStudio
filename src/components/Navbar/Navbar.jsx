import { Link } from 'react-router-dom';
import './index.css';
import logo from '../../assets/Images/logo.png';
import { useState } from 'react';

function Navbar({ showDropdown }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item); // Update selected item
    setDropdownVisible(false); // Close dropdown
  };

  return (
    <div className="navbar">
      {/* Logo Section */}
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <p className="logo-title">WATCH</p>
        </div>
      </Link>

      {/* Conditionally Render Collections Dropdown and Save Button */}
      {showDropdown && (
        <>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
              Collections ^
            </button>
            {dropdownVisible && (
              <div className="dropdown-content">
                <Link to="/watch" onClick={() => handleItemClick('Apple Watch Series 10')}>
                  <p>Apple Watch Series 10</p>
                </Link>
                <hr />
                <Link to="/Hermes" onClick={() => handleItemClick('Apple Watch Hermès Series 10')}>
                  <p>Apple Watch Hermès Series 10</p>
                </Link>
                <hr />
                <Link to="/SEWatch" onClick={() => handleItemClick('Apple Watch SE')}>
                  <p>Apple Watch SE</p>
                </Link>
              </div>
            )}
          </div>
          <button className="save-btn">Save</button>
        </>
      )}
    </div>
  );
}

export default Navbar;
