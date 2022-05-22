import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sideBar/SideBar'
import './Layout.css'

const Layout = () => {
  return (
    <div className='layout'>
        <Sidebar />
        <div className='outlet'>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout