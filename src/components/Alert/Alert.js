import React, { PropTypes } from 'react'
import style from './Alert.scss'

export const Alert = ({ title, text, dismissable, type }) => (
  <div className={`${style.alert} ${style[type]}`} role="alert">
    {
      dismissable && <button type="button" className={style.close} aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    }
    { title && <strong className={style.title}>{title}</strong>}
    {text}
  </div>
)

Alert.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  dismissable: PropTypes.bool.isRequired,
  type: PropTypes.oneOf([
    'info', 'warning', 'success', 'danger', 'plain'
  ]).isRequired
}

Alert.defaultProps = {
  dismissable: false,
  type: 'info'
}

export default Alert
