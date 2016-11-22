import React from 'react'
import { Link } from 'react-router'
import style from './Navigation.scss'

export const Navigation = () => (
  <nav className={style.nav}>
    <ul>
      <li><Link activeClassName={style['route-active']} to="/projects">Tests</Link></li>
      <li><Link activeClassName={style['route-active']} to="/settings">Settings</Link></li>
    </ul>
  </nav>
)

export default Navigation
