import React from "react";
import { FaStar, FaTrash } from "react-icons/fa";
import { GoRead } from "react-icons/go";
import { handleGetDate } from "../../../services/util.service";
import { useLocation, useNavigate } from "react-router-dom";
import { storageService } from "../../../services/async-storage.service";

const InboxItem = ({ item, setEmails }) => {
  const classes = `inbox-item ${item.isRead ? "read" : ""}`;
  const navigate = useNavigate();
  const location = useLocation()

  const handleEmailDelete = async () => {
    await storageService.remove("emails", item.id);
    const data = await storageService.query("emails",200,{status:location.pathname, text: ""});
    setEmails(data);
  }

  return (
    <div className={classes}>
      <FaStar className="inbox-item-icon" />
      <div className="inbox-item-subject">{item.subject}</div>
      <div className="inbox-item-body">{item.body}</div>
      <div className="inbox-item-date">{handleGetDate(item.sentAt)}</div>
      <div className="inbox-btns-wrapper">
        <FaTrash onClick={handleEmailDelete}/>
        <GoRead onClick={() => navigate(`/react-project-mail/preview/${item.id}`)}/>
      </div>
    </div>
  );
};

export default InboxItem;
