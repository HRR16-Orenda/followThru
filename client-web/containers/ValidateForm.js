// @flow
const requireFields = (...names) => data =>
  names.reduce((errors, name) => {
    if (!data[name]) {
      errors[name] = 'Required'
    }
    return errors
  }, {});
const validateUser = requireFields('username', 'email', 'password', 'isAdmin');
const validateItem = requireFields('title', 'content', 'category');
const validateDeepForm = data => {
  const errors = {}
  if (!data.name) {
    errors.name = 'Required'
  }
  errors.user = validateUser(data.user);
  errors.item = validateItem(data.item);
  return errors
};

export default validateDeepForm;
