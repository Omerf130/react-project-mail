import React from "react";
import { FaStar, FaTrash } from "react-icons/fa";
import { GoRead } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import { storageService } from "../../../services/async-storage.service";
import { handleGetDate } from "../../../services/util.service";

const StarredItem = ({ item, setEmails, handleToggleIsStarred }) => {
  const classes = `starred-item ${item.isRead ? "read" : ""}`;
  const navigate = useNavigate();
  const location = useLocation();

  const handleEmailDelete = async () => {
    await storageService.remove("emails", item.id);
    const data = await storageService.query("emails", 200, {
      status: location.pathname,
      text: "",
    });
    setEmails(data);
  };

  return (
    <>
      {item.isStarred && (
        <div className={classes}>
          <FaStar
            className="starred-item-icon"
            color="#f6db2b"
            onClick={() => handleToggleIsStarred(item.id)}
          />
          <div className="starred-item-subject">{item.subject}</div>
          <div className="starred-item-body">{item.body}</div>
          <div className="starred-item-date">{handleGetDate(item.sentAt)}</div>
          <div className="starred-btns-wrapper">
            <FaTrash onClick={handleEmailDelete} />
            <GoRead
              onClick={() => navigate(`/react-project-mail/preview/${item.id}`)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StarredItem;
