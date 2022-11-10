import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: #2d2e34;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((80vw - 1000px) / 2);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 4;
  box-shadow: 0 0 7px 0 #ffcb05;
`

export const NavLink = styled(Link)`
  color: #ffcb05;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-family: coogose-thin;
  font-weight: bolder;
  cursor: pointer;
  &.active {
    color: #ffffff;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`
