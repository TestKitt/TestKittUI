import React from 'react'
import { Navigation } from 'components/Navigation/Navigation'
import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'
import style from 'components/Navigation/Navigation.scss'

describe('(Component) Navigation', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Navigation />)
  })

  it('Should render a Link to Projects route', () => {
    expect(_wrapper.contains(
      <Link activeClassName={style.route_active} to="/settings">Settings</Link>
    )).to.be.true
  })

  it('Should render a Link to Settings route', () => {
    expect(_wrapper.contains(
      <Link activeClassName={style.route_active} to="/settings">Settings</Link>
    )).to.be.true
  })
})
