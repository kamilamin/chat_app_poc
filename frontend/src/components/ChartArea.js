import { IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';



function ChartArea({ userDetails }) {
  console.log('userDetails', userDetails[0].name);
  return (
    <div className='chatArea-container'>
      <div className='chatArea-header'>
        <p className='con-icon'>{userDetails[0].name[0]}</p>
        <div className='header-text'>
          <p className='con-title'>{userDetails[0].name}</p>
          <p className='con-timeStamp'>{userDetails[0].timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className='messages-container'>
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        
      </div>
      <div className='text-input-area'>
        <input placeholder='Type a Message' className='search-box' />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default ChartArea