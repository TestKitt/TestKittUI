import React from 'react'

export const Settings = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Settings: {props.settings}</h2>
    <button className="btn btn-default" onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className="btn btn-default" onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

Settings.propTypes = {
  settings     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Settings
