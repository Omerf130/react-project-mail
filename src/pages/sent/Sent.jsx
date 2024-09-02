import React, { useEffect } from "react";
import "./sent.css";
import SentEmailItem from "./components/SentEmailItem";
import { storageService } from "../../services/async-storage.service";
import { useLocation } from "react-router-dom";

export const Sent = ({ emails, setEmails, searchInput }) => {
  const location = useLocation()

  useEffect(() => {
    getData();
  }, [searchInput]);

  const getData = async () => {
    const data = await storageService.query("emails", 200, { status: location.pathname, text:searchInput });
    setEmails(data);
  };

  return (
    <div className="sent-container">
      <div className="sent-inner">
        {emails.map((msg) => (
          <SentEmailItem key={msg.id} item={msg} setEmails={setEmails}/>
        ))}
      </div>
    </div>
  );
};
