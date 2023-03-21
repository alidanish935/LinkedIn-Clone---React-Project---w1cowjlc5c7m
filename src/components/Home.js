import React from 'react'
import Content from './Content'
import Navbar from './Navbar'
import RightSidebar from './RightSidebar'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div>
        <Navbar/>
       <div className='flex space-between'>
        <Sidebar/>
        <Content/>
        <RightSidebar/>
       </div>

        
    </div>
  )
}

export default Home