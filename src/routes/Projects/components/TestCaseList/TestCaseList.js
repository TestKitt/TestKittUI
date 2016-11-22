import React from 'react'
import TestCaseListItem from './TestCaseListItem'
import { List, ListSubHeader } from 'react-toolbox/lib/list'

export const TestCaseList = () => (
  <List selectable ripple>
    <ListSubHeader caption="Test Cases" />
    <TestCaseListItem />
  </List>
)

export default TestCaseList
