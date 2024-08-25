import React from "react";
import { FaStar } from "react-icons/fa";

const TrashItem = ({ item }) => {
  const classes = `trash-item ${item.isRead ? "read" : ""}`

  return (
    <div className={classes}>
      <FaStar className="trash-item-icon" />
      <div className="trash-item-subject">{item.subject}</div>
      <div className="trash-item-body">{item.body}</div>
      <div className="trash-item-date">{item.sentAt}</div>
    </div>
  );
};

export default TrashItem;
