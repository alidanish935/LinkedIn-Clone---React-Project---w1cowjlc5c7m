import React, { useContext } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { DataContext } from './App'

const Sidebar = () => {
  const localContext = useContext(DataContext)
  const {bkColor,setbkColor}= localContext
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
          <p className='connections' onClick={()=>setbkColor(!bkColor)} > Theme</p>
          {/* <p className='growYour'>Grow your network</p> */}
          <hr></hr>
          <Link to='https://www.linkedin.com/accessibility'> <p className='access'>Accessbility </p></Link>
            <p className='access'> functionality</p>
          <hr></hr>
          <i className="fa fa-bookmark bookmark"> My Items</i>
        </div>
        <div className='lowerDiv'>
          <Link to='https://www.linkedin.com//help/linkedin?trk=footer_d_flagship3_feed'> <p>Help</p></Link>
          {/* <p>CloudComputing</p> */}
          <Link to='https://www.linkedin.com/groups/'><h5>Groups</h5></Link>
          
          
          <Link to='https://business.linkedin.com/marketing-solutions/ads?trk=n_nav_ads_rr_b&src=li-nav&veh=ad%2Fstart'> <h5>Advertisement</h5></Link>
          <Link to='https://about.linkedin.com/'> <h5>About</h5></Link>
         
          <hr></hr>
          <p>Discover more</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar