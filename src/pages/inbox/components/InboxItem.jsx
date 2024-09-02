import React from "react";
import { FaStar, FaTrash, FaRegStar } from "react-icons/fa";
import { GoRead } from "react-icons/go";
import { handleGetDate } from "../../../services/util.service";
import { useLocation, useNavigate } from "react-router-dom";
import { storageService } from "../../../services/async-storage.service";

const InboxItem = ({ item, setEmails, handleToggleIsRead, handleToggleIsStarred, setUnreadCount }) => {
  const classes = `inbox-item ${item.isRead ? "read" : ""}`;
  const navigate = useNavigate();
  const location = useLocation();

  const handleEmailDelete = async () => {
    await storageService.remove("emails", item.id);
    const data = await storageService.query("emails", 200, {
      status: location.pathname,
      text: "",
    });
    await setUnreadCountHandler();
    setEmails(data);
  };

  const setUnreadCountHandler = async() => {
    const entities = await storageService.query("emails");
    const unreadEmails = entities.filter((entity) => !entity.isRead);
    setUnreadCount(unreadEmails.length);
  };

  return (
    <div className={classes}>
      <input
        type="checkbox"
        checked={item.isRead}
        onChange={() => handleToggleIsRead(item.id)}
      />
      {item.isStarred ? (
        <FaStar className="inbox-item-icon" color="#f6db2b" onClick={() => handleToggleIsStarred(item.id)}/>
      ) : (
        <FaRegStar className="inbox-item-icon" onClick={() => handleToggleIsStarred(item.id)}/>
      )}
      <div className="inbox-item-subject">{item.subject}</div>
      <div className="inbox-item-body">{item.body}</div>
      <div className="inbox-item-date">{handleGetDate(item.sentAt)}</div>
      <div className="inbox-btns-wrapper">
        <FaTrash onClick={handleEmailDelete} />
        <GoRead
          onClick={() => navigate(`/react-project-mail/preview/${item.id}`)}
        />
      </div>
    </div>
  );
};

export default InboxItem;
