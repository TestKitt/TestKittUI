import React from 'react'
import { Link as RouterLink } from 'react-router'
import { ListItem, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import style from './TestCaseListItem.scss'

export const TestCaseListItem = () => (

  <div>
      <ListItem
          caption='TC01 Valid Login'
          legend={<span>Last Run: <span className="text-success">Pass</span></span>}
          className={`${style['test-case']} ${style.success}`}
      />
  </div>
)

export default TestCaseListItem
