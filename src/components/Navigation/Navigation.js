import React from 'react'
import { Link } from 'react-router'
import style from './Navigation.scss'

export const Navigation = () => (
  <nav className={style.nav}>
    <ul>
      <li><Link activeClassName={style.route_active} to="/projects">Projects</Link></li>
      <li><Link activeClassName={style.route_active} to="/settings">Settings</Link></li>
    </ul>
  </nav>
)

export default Navigation
