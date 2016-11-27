import React from 'react'
import { Header } from 'components/Header/Header'
import { Navigation } from 'components/Navigation/Navigation'
import { shallow } from 'enzyme'
import style from 'components/Navigation/Navigation.scss'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  it('Should render the Navigation', () => {
    expect(_wrapper.contains(
      <Navigation className="nav" />
    )).to.be.true
  })
})
