
import React from 'react'
import './Navbar.css'
import smallLogo from '../Images/smallLogo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const name = localStorage.getItem("loggedUser");
  const navigate = useNavigate();

  const logoutFn = () => {
    localStorage.setItem('loggedUser', null);
    navigate('/login');
  }
  return (
    <div className='container'>

      <nav className='flex space-between nav'>
        <div className='left flex items-center semibold '>
          <div><img src={smallLogo} alt="logo" width='40px' /></div>
          <div> <input className='search' type='text' placeholder='Search...' /></div>
        </div>
        <div className='right flex items-center space-between'>
          <i className="fa fa-home faIconsIcon"><p className='homeIcon'>Home</p></i>
          <i className="fa fa-user-circle-o faIcons" ><p className='meIcon'>{name}</p></i>
          <button className='logout' onClick={logoutFn}>Logout</button>
        </div>


      </nav>

    </div>
  )
}

export default Navbar