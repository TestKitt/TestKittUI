import React from 'react'
import { ListItem } from 'react-toolbox/lib/list'
import style from './TestCaseListItem.scss'

export const TestCaseListItem = () => (
  <ListItem
    caption="TC01 Valid Login"
    legend={<span>Last Run: <span className="text-success">Pass</span></span>}
    className={`${style['test-case']} ${style.success}`}
  />
)

export default TestCaseListItem