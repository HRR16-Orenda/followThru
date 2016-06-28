// @flow
import { reduxForm, addArrayValue } from 'redux-form';
import FormComponent from '../components/form.js';
import * as actions from '../actions/index.js';

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


const queryWikipedia = (data) => {
  dispatch(actions.queryWikipedia(data));
}

function mapStateToProps(state, ownProps) {
  return {
    suggestions: state.lists.suggestions,
    userInput: state.lists.userInput
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    queryWikipedia: (data) => {
      dispatch(actions.queryWikipedia(data));
    },
    updateInputWithSuggestion: (input) => {
      console.log('***', input);
      dispatch(actions.updateInputWithSuggestionFirst(input));
    },
    updateUserInput: (input) => {
      dispatch(actions.updateUserInput(input))
    }
  };
};
export default reduxForm({
  form: 'general',
  fields,
}, mapStateToProps, mapDispatchToProps)(FormComponent)
