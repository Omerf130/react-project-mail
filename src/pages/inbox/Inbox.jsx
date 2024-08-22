import React from 'react'
import { messages, loggedinUser } from '../../consts'

export const Inbox = () => {
  const inboxMessages = messages.filter((message) => message.to === loggedinUser.email)

  return (
    <div className='inbox-container'>
      {inboxMessages.map((message) => (
         <div key={message.id} className='inbox-item'>
          {message.subject}
         </div>
      ))}
    </div>
  )
}