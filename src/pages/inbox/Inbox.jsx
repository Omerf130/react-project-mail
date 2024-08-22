import React from "react";
import { messages, loggedinUser } from "../../consts";
import InboxItem from "./components/InboxItem";
import "./Inbox.css";

export const Inbox = () => {
  const inboxMessages = messages.filter(
    (message) => message.to === loggedinUser.email
  );

  return (
    <div className="inbox-container">
      <div className="inbox-inner">
        {inboxMessages.map((message) => (
          <InboxItem key={message.id} item={message} />
        ))}
      </div>
    </div>
  );
};
