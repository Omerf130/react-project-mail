import React, { useEffect } from "react";
import InboxItem from "./components/InboxItem";
import "./Inbox.css";
import { storageService } from "../../services/async-storage.service";
import { useLocation } from "react-router-dom";

export const Inbox = ({
  emails,
  setEmails,
  searchInput,
  handleToggleIsRead,
  handleToggleIsStarred,
}) => {
  const location = useLocation();
  useEffect(() => {
    getData();
  }, [searchInput]);

  const getData = async () => {
    const data = await storageService.query("emails", 200, {
      status: location.pathname,
      text: searchInput,
    });
    setEmails(data);
  };

  return (
    <div className="inbox-container">
      <div className="inbox-inner">
        {emails.map((message) => (
          <InboxItem
            key={message.id}
            item={message}
            setEmails={setEmails}
            handleToggleIsRead={handleToggleIsRead}
            handleToggleIsStarred={handleToggleIsStarred}
          />
        ))}
      </div>
    </div>
  );
};
