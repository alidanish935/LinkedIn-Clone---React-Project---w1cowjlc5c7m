import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import Signup from './Signup';
import { createContext } from 'react';

export const DataContext = createContext()
const App = () => {
  const [bkColor,setbkColor]=useState(false)
  return (
    <div className={bkColor && 'home'}>
      <DataContext.Provider value={{bkColor,setbkColor}}>

      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      </DataContext.Provider>
    </div>
  )
}

export default App;
