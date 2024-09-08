import React, { useRef, useState } from "react";
import "./TopBar.css";
import { FaSearch } from "react-icons/fa";
import { TbPencilExclamation } from "react-icons/tb";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { utilService } from "../../services/util.service";
import { storageService } from "../../services/async-storage.service";

export const TopBar = ({ setSearchInput, composeEmail, setDrafts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toInputRef = useRef("");
  const subjectInputRef = useRef("");
  const bodyInputRef = useRef("");

  const intervalId = useRef(null);
  const memoIdRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newEmail = {
      to: toInputRef.current,
      subject: subjectInputRef.current,
      body: bodyInputRef.current,
      from: "omer@gmail.com",
      id: utilService.makeId(),
      isRead: true,
      isStarred: false,
      removedAt: null,
      sentAt: Date.now(),
    };

    composeEmail(newEmail);
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    memoIdRef.current = utilService.makeId();
    memoIdRef.current = null; 
    intervalId.current = setInterval(() => {
      onAddDraft();
    }, 5000);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
    memoIdRef.current = null; 
    clearInterval(intervalId.current);
  };

  const onAddDraft = () => {
    const id = utilService.makeId();

    const newDraft = {
      to: toInputRef.current,
      subject: subjectInputRef.current,
      body: bodyInputRef.current,
      from: "omer@gmail.com",
      id: memoIdRef.current ? memoIdRef.current : id,
      isRead: true,
      isStarred: false,
      removedAt: null,
      sentAt: null,
    };
    if (!memoIdRef.current) {
      memoIdRef.current = id;
    }

    setDrafts((prev) => {
      if (!prev) {
        return [newDraft];
      } else {
        const isDraftExist = prev.some(
          (draft) => draft.id === memoIdRef.current
        );
        return isDraftExist
          ? prev.map((draft) =>
              draft.id === memoIdRef.current ? { ...newDraft } : draft
            )
          : [...prev, newDraft];
      }
    });
  };

  return (
    <div className="top-nav-container">
      <div className="compose-wrapper">
        <TbPencilExclamation className="compose-icon" />
        <button className="compose-text" onClick={handleOpenModal}>
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
              onClick={onModalClose}
            />
          </div>
          <div className="modal-to">
            <div className="modal-to-title">To:</div>
            <input
              type="text"
              placeholder="Enter Email Destination..."
              required
              onChange={(event) => (toInputRef.current = event.target.value)}
            />
          </div>
          <div className="modal-subject">
            <div className="modal-subject-title">Subject:</div>
            <input
              type="text"
              placeholder="Enter Email Subject..."
              required
              onChange={(event) => (subjectInputRef.current = event.target.value)}
            />
          </div>
          <div className="modal-body">
            <div className="modal-body-title">Content:</div>
            <textarea
              rows="10"
              cols="40"
              required
              onChange={(event) => (bodyInputRef.current = event.target.value)}
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
