import React from 'react'
import style from './LoadingMessage.scss'
import ProgressBar from 'react-toolbox/lib/progress_bar'

export const LoadingMessage = (props) => (
  <div className={`${style['loading-message']} text-center`} >
    <ProgressBar className={style['indicator']} type="circular" mode="indeterminate" />
    <h5>{props.message}</h5>
  </div>
)

LoadingMessage.propTypes = {
  message: React.PropTypes.string.isRequired
}

export default LoadingMessage
