import React from 'react'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
    <>
    <NavBar />
    <main className=" min-h-[90vh] mb-16 ">{children}</main>
    
    </>
  )
}

export default Layout