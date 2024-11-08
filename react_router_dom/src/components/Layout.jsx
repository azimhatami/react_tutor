import React from 'react'
import Navbar from './Navbar'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
       <Navbar /> 
        <Outlet />
        <footer style={{
            marginTop: '22rem', 
            border: '1px solid #777',
            borderRadius: '0.4rem',
            padding: '1.5rem',
            fontSize: '2rem',
            }}>
            This is a Footer
        </footer>
    </div>
  )
}

export default Layout