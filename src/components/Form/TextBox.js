import React, { PropTypes } from 'react'
import Input from 'react-toolbox/lib/input'

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <Input
    hint={label}
    label={label}
    error={touched && error ? error : null}
    {...input}
    {...custom}
  />
)

renderTextField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object
}

export default renderTextField
