import React from "react";
import { FaStar } from "react-icons/fa";

const TrashItem = ({ item }) => {
  return (
    <div className="trash-item">
      <FaStar className="trash-item-icon" />
      <div className="trash-item-subject">{item.subject}</div>
      <div className="trash-item-body">{item.body}</div>
      <div className="trash-item-date">{item.sentAt}</div>
    </div>
  );
};

export default TrashItem;
