import React, { useState } from 'react'
import './myStyles.css'
import Sidebar from './Sidebar';
import ChatArea from './ChartArea'

function MainContainer() {
  const [conversations, setConversations] = useState([
    {
      name: 'Test#1',
      lastMessage: 'Last Message # 01',
      timeStamp: 'Today'
    },
  ])
  return (
    <div className='main-container'>
      <Sidebar />
      <ChatArea userDetails={conversations} />
    </div>
  )
}

export default MainContainer