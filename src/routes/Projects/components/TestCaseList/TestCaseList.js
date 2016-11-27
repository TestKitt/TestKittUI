import React, { PropTypes } from 'react'
import TestCaseListItem from './TestCaseListItem'
import { List, ListSubHeader } from 'react-toolbox/lib/list'

export const TestCaseList = (props) => {
  const { testCases } = props
  return (
    <List selectable ripple>
      <ListSubHeader caption="Test Cases" />
      {
        testCases.map((testCase, index) => <TestCaseListItem
          key={index}
          id={testCase._id}
          name={testCase.name}
          description={testCase.description}
          lastRunResult={testCase.lastRun}
        />)
      }
    </List>
  )
}

TestCaseList.propTypes = {
  testCases: PropTypes.array.isRequired
}

TestCaseList.defaultProps = {
  testCases: []
}

export default TestCaseList
