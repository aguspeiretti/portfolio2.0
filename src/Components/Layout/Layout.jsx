import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'
import SideBar from '../SideBar/SideBar'

function Layout() {
  return (
    <div className='App'>
     
        <div className='page'>
           <Home />   
        </div>
    </div>
  )
}

export default Layout