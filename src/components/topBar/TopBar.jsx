import React, { useState } from "react";
import "./TopBar.css";
import { FaSearch } from "react-icons/fa";
import { TbPencilExclamation } from "react-icons/tb";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { utilService } from "../../services/util.service";

export const TopBar = ({ setSearchInput, composeEmail }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toInput, setToInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newEmail = {
      to: toInput,
      subject: subjectInput,
      body:bodyInput,
      from: "omer@gmail.com",
      id: utilService.makeId(),
      isRead: true,
      isStarred: false,
      removedAt:null,
      sentAt:  Date.now()
    };

    composeEmail(newEmail);
    setIsModalOpen(false);
  }

  return (
    <div className="top-nav-container">
      <div className="compose-wrapper">
        <TbPencilExclamation className="compose-icon" />
        <button className="compose-text" onClick={() => setIsModalOpen(true)}>
          Compose
        </button>
      </div>
      <div className="search-wrapper">
        <FaSearch className="search-icon" />
        <input
          className="search-text"
          type="text"
          placeholder="Search..."
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>
      {isModalOpen && (
        <form className="modal-container" onSubmit={handleFormSubmit}>
          <div className="modal-top">
            <div className="modal-top-text">New Email:</div>
            <IoMdCloseCircleOutline
              className="modal-close-btn"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
          <div className="modal-to">
            <div className="modal-to-title">To:</div>
            <input
              type="text"
              placeholder="Enter Email Destination..."
              required
              onChange={(event) => setToInput(event.target.value)}
            />
          </div>
          <div className="modal-subject">
            <div className="modal-subject-title">Subject:</div>
            <input
              type="text"
              placeholder="Enter Email Subject..."
              required
              onChange={(event) => setSubjectInput(event.target.value)}
            />
          </div>
          <div className="modal-body">
            <div className="modal-body-title">Content:</div>
            <textarea
              rows="10"
              cols="40"
              required
              onChange={(event) => setBodyInput(event.target.value)}
            ></textarea>
          </div>
          <div className="modal-bottom">
            <input type="submit" value="Send" />
          </div>
        </form>
      )}
    </div>
  );
};
