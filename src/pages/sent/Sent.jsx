import React from 'react'
import { messages, loggedinUser } from '../../consts'

export const Sent = () => {
  const sentMsg = messages.filter((msg) => msg.from === loggedinUser.email)
  
  return (
    <div className='sent-messages'>
      {sentMsg.map(message => (
        <div key={message.id} className='message-item'>
          {message.subject}
        </div>
      ))}
    </div>
  )
}