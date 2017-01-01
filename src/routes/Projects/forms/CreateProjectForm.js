import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, submit } from 'redux-form'
import { Button } from 'react-toolbox/lib/button'
import Dialog from 'react-toolbox/lib/dialog'
import { TextBox } from 'components/Form'
import { showAddProjectForm, closeAddProjectForm, createProject } from '../modules/projects'
import style from './CreateProjectForm.scss'

let CreateProjectForm = (props) => {
  const { showForm, closeForm, performSubmit, creating, isShown } = props

  return (
    <div>
      <Button icon="add" onClick={showForm} label="Add New Project" flat primary />
      <Dialog
        actions={[
          { label: 'Cancel', onClick: closeForm, disabled: creating },
          { label: 'Save', onClick: performSubmit, disabled: creating }
        ]}
        active={isShown}
        onEscKeyDown={closeForm}
        onOverlayClick={closeForm}
        title="Add a New Project"
      >

        <form className={style.create_form}>
          <Field name="name" label="Project Name" component={TextBox} type="text" required />
          <Field name="description" multiline floating rows={3} label="Project Description"
            component={TextBox} type="text" required />
          <Field name="image_url" label="Project Image URL" required component={TextBox} type="text" />
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
CreateProjectForm = reduxForm({
  form: 'createProject',
  validate
})(CreateProjectForm)

CreateProjectForm.propTypes = {
  isShown: PropTypes.bool.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm)
