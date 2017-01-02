import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, isSubmitting } from 'redux-form'
import { Button } from 'react-toolbox/lib/button'
import { TextBox } from 'components/Form'
import dialogForm from 'hocs/dialogForm'
import { saveProject } from '../modules/projects'
import style from './ProjectForm.scss'

const formKey = 'projectForm'

let ProjectForm = ({ handleSubmit, showSubmit }) => (
  <form onSubmit={handleSubmit} className={style.create_form}>
    <Field name="name" label="Project Name" component={TextBox} type="text" required />
    <Field name="description" multiline floating rows={3} label="Project Description"
           component={TextBox} type="text" required />
    <Field name="image_url" label="Project Image URL" required component={TextBox} type="text" />
    {
      showSubmit && <Button icon="save" type="submit" label="Save" raised primary />
    }
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
  } else if (values.description.length > 350) {
    errors.description = 'Must be 350 characters or less'
  }
  if (!values.image_url) {
    errors.image_url = 'Required'
  } else if (values.image_url.length > 350) {
    errors.image_url = 'Must be 350 characters or less'
  } else if (!/^(f|ht)tps?:\/\//i.test(values.image_url)) {
    errors.image_url = 'Must start with http:// or https://'
  }
  return errors
}

// Decorate the form component
ProjectForm = reduxForm({
  form: formKey,
  validate
})(ProjectForm)

ProjectForm.propTypes = {
  showSubmit: PropTypes.bool.isRequired,
  creating: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
}

ProjectForm.defaultProps = {
  showSubmit: true
}

const mapStateToProps = (state, ownProps) => {
  const props = {
    creating: isSubmitting(formKey)(),
  }

  if (ownProps.id){
    props.initialValues = {
      name: ownProps.name,
      description: ownProps.description,
      image_url: ownProps.imageUrl
    }
  }

  return props
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (values) => dispatch(saveProject(values, ownProps.id ? ownProps.id : null))
  }
}

ProjectForm = connect(mapStateToProps, mapDispatchToProps)(ProjectForm)

export const ProjectFormDialog = dialogForm(ProjectForm, formKey)

export default ProjectForm