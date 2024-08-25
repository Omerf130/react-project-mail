import React from 'react'
import { FaStar } from "react-icons/fa";
import { handleGetDate } from '../../../services/util.service';

const InboxItem = ({item}) => {



  return (
    <div className='inbox-item'>
      <FaStar className='inbox-item-icon'/>
      <div className='inbox-item-subject'>{item.subject}</div>
      <div className='inbox-item-body'>{item.body}</div>
      <div className='inbox-item-date'>{handleGetDate(item.sentAt)}</div>
    </div>
  )
}

export default InboxItem