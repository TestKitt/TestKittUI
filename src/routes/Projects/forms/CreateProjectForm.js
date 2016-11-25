import React from 'react'
import Input from 'react-toolbox/lib/input'
import style from './CreateProjectForm.scss'

export const CreateProjectForm = () => (
  <form className={style['create-form']}>
    <Input name="name" type="text" label="Project Name" required />
    <Input name="description" type="text" multiline floating rows={3} label="Project Description" required />
  </form>
)

export default CreateProjectForm
