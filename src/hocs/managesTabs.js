import React from 'react'

export const managesTabs = (WrappedComponent) => {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        index: 0
      }
      this.handleTabChange = this.handleTabChange.bind(this)
    }

    handleTabChange = (index) => {
      this.setState({ index })
    }

    render () {
      return <WrappedComponent
        {...this.props}
        activeTab={this.state.index}
        handleTabChange={this.handleTabChange}
      />
    }
  }
}

export default managesTabs
