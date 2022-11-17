import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='navFooter'>
          <NavLink to="/home" className="navItems">Inicio</NavLink>
          <NavLink to="/about" className="navItems">Sobre Nosotros</NavLink>
        </div>
        <div className='redesSocial'>

          <a href='https://www.facebook.com/profile.php?id=100083129922344' className='itemsSocial'>
          <i className="fa-brands fa-facebook li" aria-hidden="true"></i>
          </a>

          <a href='https://www.instagram.com/codigo.c13/">' className='itemsSocial'>
          <i className="fa-brands fa-instagram li" aria-hidden="true"></i>
          </a>

          <a href='https://www.linkedin.com/company/corporación-afrocolombiana-son-batá/' className='itemsSocial'>
          <i className="fa-brands fa-linkedin li" aria-hidden="true"></i>
          </a>
        </div>

        <div className='copyright'>
            <span>Hecho con ❤️ & ☕ por participantes de la primera cohorte.</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
