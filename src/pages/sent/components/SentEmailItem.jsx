import React from "react";
import { FaStar } from "react-icons/fa";

const SentEmailItem = ({ item }) => {
   const classes = `sent-item ${item.isRead ? "read" : ""}`
  return (
    <div className={classes}>
      <FaStar className="sent-item-icon" />
      <div className="sent-item-subject">{item.subject}</div>
      <div className="sent-item-body">{item.body}</div>
      <div className="sent-item-date">{item.sentAt}</div>
    </div>
  );
};

export default SentEmailItem;
