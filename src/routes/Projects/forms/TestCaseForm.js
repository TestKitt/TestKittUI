import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, submit } from 'redux-form'
import { Button } from 'react-toolbox/lib/button'
import Dialog from 'react-toolbox/lib/dialog'
import { TextBox } from 'components/Form'
import { showAddProjectForm, closeAddProjectForm, createProject } from '../modules/projects'
import style from './TestCaseForm.scss'

let TestCaseForm = (props) => {
  const { showForm, closeForm, performSubmit, creating, isShown, buttonClass } = props

  return (
    <div>
      <Button icon="add" onClick={showForm} className={buttonClass} label="Add New Test Case" flat primary />
      <Dialog
        actions={[
          { label: 'Cancel', onClick: closeForm, disabled: creating },
          { label: 'Save', onClick: performSubmit, disabled: creating }
        ]}
        active={isShown}
        onEscKeyDown={closeForm}
        onOverlayClick={closeForm}
        title="Add a New Test Case"
      >

        <form className={style.create_form}>
          <Field name="name" label="Test Case Name" component={TextBox} type="text" required />
          <Field name="description" multiline floating rows={3} label="Test Case Description"
            component={TextBox} type="text" required />
        </form>
      </Dialog>
    </div>
  )
}

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
  form: 'createTrip',
  validate
})(TestCaseForm)

TestCaseForm.propTypes = {
  isShown: PropTypes.bool.isRequired,
  buttonClass: PropTypes.string,
  creating: PropTypes.bool.isRequired,
  showForm: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  performSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  creating: state.projects.creating,
  isShown: state.projects.isAddProjectFormShown
})

const mapDispatchToProps = {
  showForm : () => showAddProjectForm(),
  closeForm : () => closeAddProjectForm(),
  performSubmit: () => submit('createProject'),
  onSubmit: (values) => createProject(values)
}

export default connect(mapStateToProps, mapDispatchToProps)(TestCaseForm)
