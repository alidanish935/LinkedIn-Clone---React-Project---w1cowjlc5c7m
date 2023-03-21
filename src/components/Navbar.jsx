import React from 'react'
import './Navbar.css'
import smallLogo from '../Images/smallLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const name = localStorage.getItem("name")
  return (
    <div className='container'>

      <nav className='flex space-between nav'>
        <div className='left flex items-center semibold '>
          <div><img src={smallLogo} alt="logo" width='30px' /></div>
          <div> <input className='search' type='text' placeholder='Search...' /></div>


        </div>
        <div className='right flex items-center space-between '>

         
            <i className="fa fa-home faIconsIcon"><p className='homeIcon'>Home</p></i>


            <i className="fa fa-users faIcons"><p className='networkIcon'>My Network</p></i>
        
          <i className="fa fa-briefcase faIcons" ><p className='jobsIcon'>Jobs</p></i>
          <i className="fa fa-commenting-o faIcons" ><p className='msgIcon'>Messaging</p></i>
          <i className="fa fa-bell-o faIcons" ><p className='notificationsIcon'>Notifications</p></i>
          <i className="fa fa-th faIcons"><p>Work</p></i>
          <i className="fa fa-user-circle-o faIcons" ><p className='meIcon'>{name}</p></i>
          {/* <Link to='collection' ></Link> */}

        </div>


      </nav>

    </div>
  )
}

export default Navbar