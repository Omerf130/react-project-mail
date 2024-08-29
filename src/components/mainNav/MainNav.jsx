import React from "react";
import "./MainNav.css";
import { MdOutlinePresentToAll, MdMoveToInbox } from "react-icons/md";
import { FaTrash, FaStar, FaInfoCircle,FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const MainNav = () => {

  return (
    <div className="main-nav-container">
      <NavLink
        to="/react-project-mail/inbox"
        className={({ isActive, isPending }) =>
          isPending ? " nav-item pending" : isActive ? "nav-item active" : "nav-item"
        }
      >
        <MdMoveToInbox />
        <div className="item-title">Inbox</div>
      </NavLink>
      <NavLink
        to="/react-project-mail/sent"
        className={({ isActive, isPending }) =>
          isPending ? " nav-item pending" : isActive ? "nav-item active" : "nav-item"
        }
      >
         <MdOutlinePresentToAll />
         <div className="item-title">Sent</div>
      </NavLink>
      <NavLink
        to="/react-project-mail/starred"
        className={({ isActive, isPending }) =>
          isPending ? " nav-item pending" : isActive ? "nav-item active" : "nav-item"
        }
      >
          <FaStar />
          <div className="item-title">Starred</div>
      </NavLink>
      <NavLink
        to="/react-project-mail/trash"
        className={({ isActive, isPending }) =>
          isPending ? " nav-item pending" : isActive ? "nav-item active" : "nav-item"
        }
      >
         <FaTrash />
         <div className="item-title">Trash</div>
      </NavLink>
      <NavLink
        to="/react-project-mail/"
        className={({ isActive, isPending }) =>
          isPending ? " nav-item pending" : isActive ? "nav-item active" : "nav-item"
        }
      >
         <FaHome />
         <div className="item-title">Home</div>
      </NavLink>
      <NavLink
        to="/react-project-mail/about"
        className={({ isActive, isPending }) =>
          isPending ? " nav-item pending" : isActive ? "nav-item active" : "nav-item"
        }
      >
         <FaInfoCircle />
         <div className="item-title">About</div>
      </NavLink>
     
    </div>
  );
};
