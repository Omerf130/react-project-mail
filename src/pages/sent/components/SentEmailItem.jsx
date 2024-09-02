import React from "react";
import { FaStar, FaTrash } from "react-icons/fa";
import { GoRead } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import { storageService } from "../../../services/async-storage.service";
import { handleGetDate } from "../../../services/util.service";

const SentEmailItem = ({ item, setEmails }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const classes = `sent-item ${item.isRead ? "read" : ""}`;

  const handleEmailDelete = async () => {
    await storageService.remove("emails", item.id);
    const data = await storageService.query("emails",200,{status:location.pathname, text: ""});
    setEmails(data);
  }

  return (
    <div className={classes}>
      <FaStar className="sent-item-icon" />
      <div className="sent-item-subject">{item.subject}</div>
      <div className="sent-item-body">{item.body}</div>
      <div className="sent-item-date">{handleGetDate(item.sentAt)}</div>
      <div className="sent-btns-wrapper">
        <FaTrash onClick={handleEmailDelete} />
        <GoRead onClick={() => navigate(`/react-project-mail/preview/${item.id}`)}
        />
      </div>
    </div>
  );
};

export default SentEmailItem;
