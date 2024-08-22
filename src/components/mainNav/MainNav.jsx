import React from "react";
import "./MainNav.css";
import { MdOutlinePresentToAll, MdMoveToInbox } from "react-icons/md";
import { FaTrash, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const MainNav = () => {

  return (
    <div className="main-nav-container">
      <NavLink
        to="/inbox"
        className={({ isActive, isPending }) =>
          isPending ? " nav-item pending" : isActive ? "nav-item active" : "nav-item"
        }
      >
        <MdMoveToInbox />
        <div className="item-title">Inbox</div>
      </NavLink>
      <NavLink
        to="/sent"
        className={({ isActive, isPending }) =>
          isPending ? " nav-item pending" : isActive ? "nav-item active" : "nav-item"
        }
      >
         <MdOutlinePresentToAll />
         <div className="item-title">Sent</div>
      </NavLink>
      <NavLink
        to="/starred"
        className={({ isActive, isPending }) =>
          isPending ? " nav-item pending" : isActive ? "nav-item active" : "nav-item"
        }
      >
          <FaStar />
          <div className="item-title">Starred</div>
      </NavLink>
      <NavLink
        to="/trash"
        className={({ isActive, isPending }) =>
          isPending ? " nav-item pending" : isActive ? "nav-item active" : "nav-item"
        }
      >
         <FaTrash />
         <div className="item-title">Trash</div>
      </NavLink>
     
    </div>
  );
};
