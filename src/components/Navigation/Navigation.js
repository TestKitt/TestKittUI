import React from 'react'
import { Link, IndexLink } from 'react-router';
import style from './Navigation.scss'

export const Navigation = (props) => (
    <nav className={style.nav}>
        <ul>
            <li><IndexLink activeClassName={style['route-active']} to='/'>Tests</IndexLink></li>
            <li><Link activeClassName={style['route-active']} to='/counter'>Settings</Link></li>
        </ul>
    </nav>
)

export default Navigation
