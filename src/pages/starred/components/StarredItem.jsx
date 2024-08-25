import React from 'react'
import { FaStar } from "react-icons/fa";


const StarredItem = ({item}) => {
  const classes = `starred-item ${item.isRead ? "read" : ""}`

  return (
    <div className={classes}>
      <FaStar className="starred-item-icon" />
      <div className="starred-item-subject">{item.subject}</div>
      <div className="starred-item-body">{item.body}</div>
      <div className="starred-item-date">{item.sentAt}</div>
    </div>
  )
}

export default StarredItem