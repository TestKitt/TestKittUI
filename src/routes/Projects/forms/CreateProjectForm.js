import React from 'react'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button'
import PageTitle from '../../../components/PageTitle'
import style from './CreateProjectForm.scss'

export const CreateProjectForm = () => (
  <form className={style['create-form']}>
    <PageTitle text="Create a New Project" />
    <Input name="name" type="text" label="Project Name" required />
    <Input name="description" type="text" multiline floating rows={3} label="Project Description" required />
    <div className="text-right">
      <Button label="Add Project" icon="add" raised primary />
    </div>
  </form>
)

export default CreateProjectForm
