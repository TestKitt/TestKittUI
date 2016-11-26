import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './CreateProjectForm.scss'
import { TextBox } from '../../../components/Form'

let CreateProjectForm = (props) => (
  <form onSubmit={props.handleSubmit} className={style['create-form']}>
    <Field name="name" label="Project Name" component={TextBox} type="text" required />
    <Field name="description" multiline floating rows={3} label="Project Description"
      component={TextBox} type="text" required />
    <Field name="image_url" label="Project Image URL" required component={TextBox} type="text" />
  </form>
)

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 40) {
    errors.name = 'Must be 40 characters or less'
  }
  if (!values.description) {
    errors.description = 'Required'
  } else if (values.description.length > 40) {
    errors.description = 'Must be 40 characters or less'
  }
  if (!values.image_url) {
    errors.image_url = 'Required'
  } else if (values.image_url.length > 300) {
    errors.image_url = 'Must be 300 characters or less'
  } else if (!/^(f|ht)tps?:\/\//i.test(values.image_url)) {
    errors.image_url = 'Must start with http:// or https://'
  }
  return errors
}

// Decorate the form component
CreateProjectForm = reduxForm({
  form: 'createProject',
  validate
})(CreateProjectForm)

CreateProjectForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default CreateProjectForm
