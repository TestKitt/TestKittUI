import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, isSubmitting } from 'redux-form'
import { Button } from 'react-toolbox/lib/button'
import { TextBox } from 'components/Form'
import dialogForm from 'hocs/dialogForm'
import { saveTest } from '../modules/tests'
import style from './TestCaseForm.scss'

const formKey = 'testCaseForm'

let TestCaseForm = ({ handleSubmit, showSubmit }) => (
  <form onSubmit={handleSubmit} className={style.create_form}>
    <Field name="name" label="Test Case Name" component={TextBox} type="text" required />
    <Field name="description" multiline floating rows={3} label="Test Case Description"
           component={TextBox} type="text" required />
    {
      showSubmit && <Button icon="save" type="submit" label="Add New Test Case" raised primary />
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
  return errors
}

// Decorate the form component
TestCaseForm = reduxForm({
  form: formKey,
  validate
})(TestCaseForm)

TestCaseForm.propTypes = {
  projectId: PropTypes.string.isRequired,
  showSubmit: PropTypes.bool.isRequired,
  creating: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
}

TestCaseForm.defaultProps = {
  showSubmit: true
}

const mapStateToProps = (state) => ({
  creating: isSubmitting(formKey)()
})

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: (values) => dispatch(saveTest(values, props.projectId))
  }
}

TestCaseForm = connect(mapStateToProps, mapDispatchToProps)(TestCaseForm)

export const TestCaseFormDialog = dialogForm(TestCaseForm, formKey)

export default TestCaseForm
