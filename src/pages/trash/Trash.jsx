import React, { useEffect } from "react";
import TrashItem from "./components/TrashItem";
import "./Trash.css";
import { storageService } from "../../services/async-storage.service";
import { useLocation } from "react-router-dom";

export const Trash = ({ emails, setEmails, searchInput }) => {
  const location = useLocation()

  useEffect(() => {
    getData()
  },[searchInput])

  const getData = async () => {
    const data = await storageService.query("emails",200,{status:location.pathname, text:searchInput});
    setEmails(data);
  }

  return (
    <div className="trash-container">
      <div className="trash-inner">
        {emails.map((msg) => (
          <TrashItem key={msg.id} item={msg} />
        ))}
      </div>
    </div>
  );
};
