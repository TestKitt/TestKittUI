import React, { PropTypes } from 'react'
import style from './PageTitle.scss'

export const PageTitle = (props) => (
  <h5 className={style.title}>{props.text}</h5>
)

PageTitle.propTypes = {
  text: PropTypes.string.isRequired
}

export default PageTitle
