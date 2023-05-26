import React from 'react'

const header = () => {
  return (
    <div className="header">
    <div className="logo">
      <img src="/logo.png" alt="" />
    </div>
    <div className="navigatin-icons">
      <div className="trans links">My Assignment</div>
      <div className="trans links">Chat with Mentor</div>
      <div className=" links active"> <img className='profile-img' src="/profile.png" alt="" /> Profile Name <img className='down-arrow' src="/down.png" alt="" /> </div>
    </div>
    </div>  
  )
}

export default header