import React from 'react'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button'
import style from './TestCaseForm.scss'

export const TestCaseForm = () => (
  <form className={style['test-case-form']}>
    <Input name="id" type="text" label="Test Case ID" value="TC02" required disabled />
    <Input name="name" type="text" label="Test Case Name" required />
    <Input name="description" type="text" multiline floating rows={3} label="Test Case Description" required />
    <div className="text-right">
      <Button label="Save" icon="save" raised primary />
    </div>
  </form>
)

export default TestCaseForm
