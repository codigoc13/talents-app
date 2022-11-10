import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      Footer
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </div>
  )
}

export default Footer
