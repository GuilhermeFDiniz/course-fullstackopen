import React from 'react'

const Notification = ({message}) => {
  console.log(message.class);
  if(message.content === {}){
    return null
  }
  return (
    <div className={message.class}>
      {message.content}
    </div>
  )
}

export default Notification
