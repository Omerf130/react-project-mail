import React from "react";
import { loggedinUser } from "../../consts";
import InboxItem from "./components/InboxItem";
import "./Inbox.css";

export const Inbox = ({emails}) => {
  const inboxMessages = emails.filter(
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
