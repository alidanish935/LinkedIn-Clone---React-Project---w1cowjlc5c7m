import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import Signup from './Signup';
const App = () => {

  return (
    <div id="main">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
