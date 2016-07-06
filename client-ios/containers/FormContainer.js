// @flow
import { connect } from 'react-redux';
import FormComponent from '../components/form.js';
import * as actions from '../actions/index.js';


function mapStateToProps(state, ownProps) {
  return {
    suggestions: state.lists.suggestions,
    userInput: state.lists.userInput,
    isKeyboardShowing: state.lists.ui.isKeyboardShowing
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    queryWikipedia: (data) => {
      dispatch(actions.queryWikipedia(data));
    },
    updateInputWithSuggestion: (input) => {
      dispatch(actions.updateInputWithSuggestion(input));
    },
    updateUserInput: (input) => {
      dispatch(actions.updateUserInput(input))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
