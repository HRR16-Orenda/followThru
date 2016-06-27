// @flow
import { reduxForm, addArrayValue } from 'redux-form';
import AuthFormComponent from '../components/authForm.js';

export const fields = [
  'username',
  'email',
  'password',
];

export default reduxForm({
  form: 'auth',
  fields,
})(AuthFormComponent)
