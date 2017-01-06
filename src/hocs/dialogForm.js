import React, { PropTypes } from 'react'
import { Button } from 'react-toolbox/lib/button'
import Dialog from 'react-toolbox/lib/dialog'
import { connect } from 'react-redux'
import { submit, hasSubmitSucceeded, hasSubmitFailed, isSubmitting, reset } from 'redux-form'

let dialogForm = (WrappedForm, formKey) => {
  let DialogForm = class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        isShown: false
      }
      this.showForm = this.showForm.bind(this)
      this.closeForm = this.closeForm.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidUpdate = () => {
      if (this.props.hasSubmitSucceeded && this.state.isShown) {
        this.setState({ isShown: false })
        this.props.reset()
      }
    }

    showForm = () => {
      this.setState({ isShown: true })
    }

    closeForm = () => {
      this.setState({ isShown: false })
    }

    handleSubmit = () => {
      this.props.performSubmit()
    }

    render () {
      return (
        <div>
          <Button icon={this.props.buttonIcon} onClick={this.showForm} label={this.props.buttonText} flat primary />
          <Dialog
            actions={[
              { label: this.props.cancelButtonText, onClick: this.closeForm, disabled: this.props.disabled },
              { label: this.props.saveButtonText, onClick: this.handleSubmit, disabled: this.props.disabled }
            ]}
            active={this.state.isShown}
            onEscKeyDown={this.closeForm}
            onOverlayClick={this.closeForm}
            title={this.props.title}
          >
            <WrappedForm
              {...this.props}
              showSubmit={false}
            />
          </Dialog>
        </div>
      )
    }
  }

  DialogForm.propTypes = {
    disabled: PropTypes.bool.isRequired,
    hasSubmitSucceeded: PropTypes.bool.isRequired,
    hasSubmitFailed: PropTypes.bool.isRequired,
    performSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    buttonIcon: PropTypes.string.isRequired,
    cancelButtonText: PropTypes.string.isRequired,
    saveButtonText: PropTypes.string.isRequired
  }

  DialogForm.defaultProps = {
    buttonIcon: 'add',
    cancelButtonText: 'Cancel',
    saveButtonText: 'Save'
  }

  const mapStateToProps = (state) => ({
    hasSubmitSucceeded: hasSubmitSucceeded(formKey)(state),
    hasSubmitFailed: hasSubmitFailed(formKey)(state),
    disabled: isSubmitting(formKey)(state)
  })

  const mapDispatchToProps = {
    performSubmit: () => submit(formKey),
    reset: () => reset(formKey)
  }

  return connect(mapStateToProps, mapDispatchToProps)(DialogForm)
}

export default dialogForm
