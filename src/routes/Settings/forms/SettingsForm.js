import React from 'react'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button'
import PageTitle from '../../../components/PageTitle'
import style from './SettingsForm.scss'

export const SettingsForm = () => (
  <form className={style['create-form']}>
    <PageTitle text="Create a New Project" />
    <Input name="name" type="text" label="Give your new project a unique name" required />
    <div className="text-right">
      <Button label="Add Project" icon="add" raised primary />
    </div>
  </form>
)

export default SettingsForm
