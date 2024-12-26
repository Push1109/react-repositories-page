import React from "react";
import {
  FaHome,
  FaCode,
  FaCloud,
  FaBook,
  FaCog,
  FaHeadset,
  FaSignOutAlt,
} from "react-icons/fa"; // React Icons
import companyIcon from "../assets/company-icon.png"; // Company Icon
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Company Section */}
      <div className="company-section">
        <img src={companyIcon} alt="Company Logo" className="company-icon" />
        <h1 className="company-name">CodeAnt AI</h1>
      </div>

      {/* User Dropdown */}
      <div className="user-dropdown">
        <button className="user-button">CodeAntAI@gmail.com ▼</button>
      </div>

      {/* Menu Options */}
      <ul className="menu-options">
        <li>
          <FaHome className="menu-icon" />
          <span>Repositories</span>
        </li>
        <li>
          <FaCode className="menu-icon" />
          <span>AI Code Review</span>
        </li>
        <li>
          <FaCloud className="menu-icon" />
          <span>Cloud Security</span>
        </li>
        <li>
          <FaBook className="menu-icon" />
          <span>How to Use</span>
        </li>
        <li>
          <FaCog className="menu-icon" />
          <span>Settings</span>
        </li>
      </ul>

      {/* Bottom Options */}
      <div className="bottom-options">
        <ul>
          <li>
            <FaHeadset className="menu-icon" />
            <span>Support</span>
          </li>
          <li>
            <FaSignOutAlt className="menu-icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
