import React from 'react'
import "./NoteComponent.css"

const NoteComponent = ({notification}) => {
  if(!notification) return null;

  return (
    <div className={`notification-wrapper ${notification.status}`}>
      <div className="notification-text"> 
        {notification.message}
      </div>
    </div>
  )
}

export default NoteComponent