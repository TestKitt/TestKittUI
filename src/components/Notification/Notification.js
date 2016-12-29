import React, { PropTypes } from 'react'
import Snackbar from 'react-toolbox/lib/Snackbar'

export const Notification = ({ close, message, isShown }) => (
  <Snackbar
    action="Dismiss"
    label={message}
    timeout={2000}
    onTimeout={close}
    onClick={close}
    type="accept"
    active={isShown}
  />
)

Notification.propTypes = {
  close: PropTypes.func.isRequired,
  message: PropTypes.string,
  isShown: PropTypes.bool.isRequired
}

export default Notification
