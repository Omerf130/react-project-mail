import React from 'react'
import { loggedinUser } from '../../consts'
import "./sent.css";
import SentEmailItem from './components/SentEmailItem';

export const Sent = ({emails}) => {
  const sentMsg = emails.filter((msg) => msg.to === loggedinUser.email)
  
  return (
    <div className="sent-container">
      <div className="sent-inner">
        {sentMsg.map((msg) => (
          <SentEmailItem key={msg.id} item={msg} />
        ))}
      </div>
    </div>
  )
}