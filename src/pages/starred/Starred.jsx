import React from "react";
import StarredItem from "./components/StarredItem";
import "./Starred.css";

export const Starred = ({ emails }) => {
  const starredMsg = emails.filter((msg) => msg.isStarred);

  return (
    <div className="starred-container">
      <div className="starred-inner">
        {starredMsg.map((msg) => (
          <StarredItem key={msg.id} item={msg} />
        ))}
      </div>
    </div>
  );
};
