import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='dashboard'>
      <NavLink to='profile'>Profile</NavLink>
      <NavLink to='payments'>Payments</NavLink>
      <Outlet />
    </div>
  )
}

export default Dashboard