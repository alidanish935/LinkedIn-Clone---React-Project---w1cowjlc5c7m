import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Signup from './Signup';
const App = () => {


  return (
    <div id="main">
      <BrowserRouter>
       
        <Routes>
          
          
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/*' element={<NotFound/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
