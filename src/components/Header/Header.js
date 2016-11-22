import React from 'react'
import style from './Header.scss'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from '../Navigation'

export const Header = () => (
  <div className={style.header}>
    <AppBar raised>
      <a className={style.logo} href="/"><img src="http://www.reactrally.com/assets/dist/img/ReactLogo.svg" /></a>
      <Navigation className="nav" />
    </AppBar>
  </div>
)

export default Header
