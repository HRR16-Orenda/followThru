// @flow
import { reduxForm, addArrayValue } from 'redux-form';
import FormComponent from '../components/form.js';

export const fields = [
  'user.username',
  'user.email',
  'user.password',
  'user.isAdmin',
  'item.title',
  'item.content',
  'item.category',
  'item.completed',
  'item.sub-category',
  'item.url'
];

export default reduxForm({
  form: 'general',
  fields,
}, undefined, {
  addValue: addArrayValue // mapDispatchToProps (will bind action creator to dispatch)
})(FormComponent)
