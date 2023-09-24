import React from 'react'

function MessageSelf() {
  var props2 = {name: 'You', message: 'This is sample self message'}
  return (
    <div className='self-message-container'>
      <div className='messageBox'>
        <p>{props2.message}</p>
        <p></p>
      </div>
    </div>
  )
}

export default MessageSelf
