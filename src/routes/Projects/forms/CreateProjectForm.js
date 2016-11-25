import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './CreateProjectForm.scss'
import { TextBox } from '../../../components/Form'

let CreateProjectForm = (props) => (
  <form onSubmit={props.handleSubmit} className={style['create-form']}>
    <Field name="firstName" label="Project Name" component={TextBox} type="text" required />
    <Field name="description" multiline floating rows={3} label="Project Description"
      component={TextBox} type="text" required />
    <Field name="imageUrl" label="Project Image URL" required component={TextBox} type="text" />
  </form>
)

// Decorate the form component
CreateProjectForm = reduxForm({
  form: 'createProject' // a unique name for this form
})(CreateProjectForm)

CreateProjectForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default CreateProjectForm
