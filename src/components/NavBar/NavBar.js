import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements'
import logo from '../../Assets/images/logo2.0.png'
import './NavBar.css'


const NavBar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>

          <NavLink to="/home">
            <img className="logo" src={logo} alt="" />
          </NavLink>

        </NavMenu>

        <NavMenu>

          <NavLink to="/home">Inicio</NavLink>
          <NavLink to="/about">Sobre Nosotros</NavLink>

        </NavMenu>
      </Nav>
      
    </>
  )
}
export default NavBar
