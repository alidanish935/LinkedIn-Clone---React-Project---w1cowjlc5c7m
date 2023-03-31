import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import dreamjob from '../Images/dreamjob.jpeg'
import './RightSidebar.css'
const RightSidebar = () => {
  const [linkedinFollow,setlinkedinFollow]=useState(false)
  const [websiteFollow,setwebsiteFollow]=useState(false)
  return (
    <div>
      <div className='RightSideBar'>
        <div className='upperRight'>
          <h5>Add to Your Feed</h5>
          <p>#Linkedln</p>
          <button className={linkedinFollow && 'followstatus'} onClick={()=>setlinkedinFollow(!linkedinFollow)}>{!linkedinFollow ?'follow':'following...'}</button>
          <p>#Website</p>
          <button className={websiteFollow && 'followstatus'}  onClick={()=>setwebsiteFollow(!websiteFollow)}>{!websiteFollow ?'follow':'following...'}</button><br></br>
          <a href=''>View all Recommendations</a>
        </div>
        <div className='middleRight'>
          <img src={dreamjob} />
        </div>
        <div className='lowerRight'>
          <h4>Design and develop by Danish </h4>
          <Link to='https://github.com/alidanish935/LinkedIn-Clone---React-Project---w1cowjlc5c7m'>Github profile link</Link>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar