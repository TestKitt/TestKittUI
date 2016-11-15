import React from 'react'
import TestCaseList from './TestCaseList'
import style from './TestCaseSidebar.scss'

export const TestCaseSidebar = () => (
    <aside className={style.sidebar}>
        <TestCaseList/>
    </aside>
)

export default TestCaseSidebar
