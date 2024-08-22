import React from "react";
import "./TopBar.css";
import { FaSearch } from "react-icons/fa";
import { TbPencilExclamation } from "react-icons/tb";

export const TopBar = () => {
  return (
    <div className="top-nav-container">
      <div className="compose-wrapper">
        <TbPencilExclamation  className="compose-icon"/>
        <button className="compose-text">Compose</button>
      </div>
      <div className="search-wrapper">
        <FaSearch className="search-icon"/>
        <input className="search-text" type="text" placeholder="Search..." />
      </div>
    </div>
  );
};
