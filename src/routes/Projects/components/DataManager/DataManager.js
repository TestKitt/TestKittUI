import React, { PropTypes } from 'react'
import Table from 'react-toolbox/lib/table'
import Dropdown from 'react-toolbox/lib/dropdown'

export const DataManager = class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeIteration: 0
    }
  }

  render () {
    const { iterations } = this.props

    return (
      <div>
        {
          iterations.length > 0 && <div>
            <Dropdown
              auto
              source={iterations}
              label="Select an iteration"
            />
            <Table
              model={model}
              selectable={false}
              source={iterations[this.state.activeIteration]}
            />
          </div>
        }
      </div>
    )
  }
}

DataManager.propTypes = {
  iterations: PropTypes.array
}

DataManager.defaultProps = {
  iterations: []
}

export default DataManager

const model = {
  key: { type: String },
  value: { type: String }
}
