import React from 'react'
import { Button } from 'react-toolbox/lib/button'
import Dialog from 'react-toolbox/lib/dialog'

// TODO: WIP
export const dialogForm = (WrappedForm, performSubmit, isSubmitting, title) => {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        isShown: false
      }
      this.showForm = this.showForm.bind(this)
      this.closeForm = this.closeForm.bind(this)
    }

    showForm = () => {
      this.setState({ isShown: true })
    }

    closeForm = () => {
      this.setState({ isShown: false })
    }

    render () {
      return <div>
        <Button icon="add" onClick={this.showForm} label={title} flat primary />
        <Dialog
          actions={[
            { label: 'Cancel', onClick: this.closeForm, disabled: isSubmitting },
            { label: 'Save', onClick: () => performSubmit(), disabled: isSubmitting }
          ]}
          active={this.state.isShown}
          onEscKeyDown={this.closeForm}
          onOverlayClick={this.closeForm}
          title={title}
        >
          <WrappedForm />
        </Dialog>
      </div>
    }
  }
}

export default dialogForm
