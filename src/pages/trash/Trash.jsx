import React from 'react'
import { messages } from '../../consts'

export const Trash = () => {
  const trashMsg = messages.filter((message) => message.removedAt)
  return (
    <div className='trash-container'>
      {trashMsg.map((message) => (
         <div key={message.id} className='trash-item'>
          {message.subject}
         </div>
      ))}
    </div>
  )
}