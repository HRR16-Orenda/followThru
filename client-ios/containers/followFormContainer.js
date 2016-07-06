// @flow
import { reduxForm, addArrayValue } from 'redux-form';
import FollowForm from '../components/followForm.js';

export const fields = [
  'username'
];

export default reduxForm({
  form: 'follow',
  fields,
})(FollowForm)
