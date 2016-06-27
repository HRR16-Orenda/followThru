// @flow
import { reduxForm, addArrayValue } from 'redux-form';
import AuthFormComponent from '../components/authForm.js';

const validate = (values, props) => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  // Validation for email should work only on 'signup' formType
  if (!values.email && props.formType === 'signup') {
    errors.email = 'Required'
  // Validation for email should work only on 'signup' formType
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) && props.formType === 'signup') {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 4) {
    errors.password = 'Must be at least 4 characters or more'
  } else if (values.password !== values.confirm && props.formType === 'signup') {
    console.log(values);
    errors.confirm = 'Must be same as password'
  }
  return errors
}

export const fields = [
  'username',
  'email',
  'password',
  'confirm'
];

export default reduxForm({
  form: 'auth',
  fields,
  validate
})(AuthFormComponent)
