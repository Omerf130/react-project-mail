import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { storageService } from "../../services/async-storage.service";
import "./EmailPreview.css";

const EmailPreview = () => {
  const { id } = useParams();
  const [currentEmail, setCurrentEmail] = useState(null);

  useEffect(() => {
    getCurrentEmail();
  }, []);

  const getCurrentEmail = async () => {
    const entity = await storageService.get("emails", id);
    setCurrentEmail(entity);
  };

  return (
    <div className="current-email-container">
      {currentEmail && (
        <>
          <div className="emails-wrapper">
            <div className="emails-to">{`Sent To: ${currentEmail.to}`}</div>
            <div className="emails-from">{`Sent From: ${currentEmail.from}`}</div>
          </div>
          <div className="email-date">{`Sent At: ${new Date(currentEmail.sentAt).toLocaleDateString()}`}</div>
          <div className="email-subject"><span>Email Subject: </span>{ `${currentEmail.subject}`}</div>
          <div className="email-body">{`${currentEmail.body}`}</div>
        </>
      )}
    </div>
  );
};

export default EmailPreview;
