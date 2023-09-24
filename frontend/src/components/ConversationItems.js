import React from 'react'

function ConversationItems({ conversations }) {
  return (
    <div className='conversation-container'>
      <p className='con-icon'>{conversations.name[0]}</p>
      <p className='con-title'>{conversations.name}</p>
      <p className='con-lastMessage'>{conversations.lastMessage}</p>
      <p className='con-timeStamp'>{conversations.timeStamp}</p>
    </div>
  )
}

export default ConversationItems