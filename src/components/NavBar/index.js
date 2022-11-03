import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/about">Sobre Nosotros</NavLink>
          <NavLink to="/home">Home</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
