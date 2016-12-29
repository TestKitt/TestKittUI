import React, { PropTypes } from 'react'
import style from './Subheader.scss'

export const Subheader = ({ text, size, alignment }) => (
  <h5 style={{ textAlign: alignment }} className={`${style.subheader} ${style[size]}`}>{text}</h5>
)

Subheader.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  alignment: PropTypes.string
}

Subheader.defaultProps = {
  size: 'normal',
  alignment: 'left'
}

export default Subheader
