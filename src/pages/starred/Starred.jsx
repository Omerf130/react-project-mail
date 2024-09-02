import React, { useEffect } from "react";
import StarredItem from "./components/StarredItem";
import "./Starred.css";
import { storageService } from "../../services/async-storage.service";
import { useLocation } from "react-router-dom";

export const Starred = ({ emails, setEmails, searchInput }) => {
  const location = useLocation()

  useEffect(() => {
    getData()
  },[searchInput])

  const getData = async () => {
    const data = await storageService.query("emails",200,{status:location.pathname, text:searchInput});
    setEmails(data);
  }

  return (
    <div className="starred-container">
      <div className="starred-inner">
        {emails.map((msg) => (
          <StarredItem key={msg.id} item={msg} setEmails={setEmails}/>
        ))}
      </div>
    </div>
  );
};
