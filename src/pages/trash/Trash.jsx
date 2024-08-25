import React from "react";
import TrashItem from "./components/TrashItem";
import "./Trash.css";

export const Trash = ({ emails }) => {
  const trashMsg = emails.filter((msg) => msg.removedAt);

  return (
    <div className="trash-container">
      <div className="trash-inner">
        {trashMsg.map((msg) => (
          <TrashItem key={msg.id} item={msg} />
        ))}
      </div>
    </div>
  );
};
