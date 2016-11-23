import React, { PropTypes } from 'react'
import Table from 'react-toolbox/lib/table'

export const DataManager = (props) => (
  <Table
    model={props.dataModel}
    selectable
    source={props.data}
  />
)

DataManager.propTypes = {
  dataModel: PropTypes.object.isRequired,
  data: PropTypes.array
}

export default DataManager
