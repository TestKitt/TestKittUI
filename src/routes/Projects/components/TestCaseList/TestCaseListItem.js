import React, { PropTypes } from 'react'
import { ListItem } from 'react-toolbox/lib/list'
import style from './TestCaseListItem.scss'

export const TestCaseListItem = (props) => {
  const { id, name, lastRunResult } = props
  return (
    <ListItem
      caption={`${id} ${name}`}
      legend={`${lastRunResult || 'No data'}`}
      className={`${style['test-case']} ${style.success}`}
    />
  )
}

TestCaseListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastRunResult: PropTypes.string
}

export default TestCaseListItem
