import React from 'react'
import NavBar from './component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default Layout