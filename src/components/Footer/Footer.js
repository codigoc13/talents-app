import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="redes">
        <ul className="items-footer">
          <ol className="ol">
            <li className="link-footer">
              <NavLink to="/home">Inicio</NavLink>
            </li>

            <li className="link-footer">
              <NavLink to="/about">Sobre nosotros</NavLink>
            </li>
          </ol>
          <li data-color="#1877f2" className="item">
            <a href="https://www.facebook.com/profile.php?id=100083129922344">
              <i class="fa-brands fa-facebook" aria-hidden="true"></i>
            </a>
          </li>

          <li data-color="#ff6600" className="item">
            <a href="https://www.instagram.com/codigo.c13/">
              <i class="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
          </li>

          <li data-color="#2260e7" className="item">
            <a href="https://www.linkedin.com/company/corporación-afrocolombiana-son-batá/">
              <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <h1 className="slogan-footer">
          Hecho con 👨‍💻 por directrices de Código y sus participantes
        </h1>
      </footer>
    </div>
  )
}

export default Footer
