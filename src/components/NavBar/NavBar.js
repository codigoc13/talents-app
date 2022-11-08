import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import logo from "../../Assets/images/Logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/home">
            <img className="logo" src={logo} />
          </NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/home">Home</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default NavBar;
