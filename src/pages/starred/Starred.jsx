import React from 'react'
import { messages, loggedinUser } from '../../consts'

export const Starred = () => {
  const starredMsg = messages.filter((msg) => msg.isStarred)
  console.log(starredMsg)
  return (
    <div className='starred-container'>
      {starredMsg.map(message =>(
        <div className='starred-item' key={message.id}>
          {message.subject}
        </div>
      ))}
    </div>
  )
}