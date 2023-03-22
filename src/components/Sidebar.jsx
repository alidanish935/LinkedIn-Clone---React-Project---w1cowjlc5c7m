import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  const name = localStorage.getItem("loggedUser")
  return (
    <div>
      <div className='leftSideBar'>
        <div className='upperDiv'>
          <div className='camera'>
            <i className="fa fa-camera cameraIcon"></i>
          </div>
          <h3 className='h3'>Welcome, {name}</h3>
          <hr></hr>
          <p className='connections'> Connections</p>
          <p className='growYour'>Grow your network</p>
          <hr></hr>
          <p className='access'>Access exclusive Tools & insights</p>
          <hr></hr>
          <i className="fa fa-bookmark bookmark"> My Items</i>
        </div>
        <div className='lowerDiv'>
          <p>Recent</p>
          <p>CloudComputing</p>
          <h5>Groups</h5>
          <h5>Events</h5>
          <h5>Followed Hashtags</h5>
          <hr></hr>
          <p>Discover more</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar