import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import AddScreen from '../components/addScreen.js';

import { Actions } from 'react-native-router-flux';

const mapDispatchToProps = (dispatch) => {
  return {
    userTypeStart: (input) => {
      dispatch(actions.userTypeStart(input.text));
    },
    userTypeEnd: (text) => {
      Actions.actionConfirmationScreen()
      // dispatch(actions.userTypeEnd(text));
    },
    fetchInitialDatabase: () => {
      dispatch(actions.fetchInitialDatabase());
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    isUserTyping: state.lists.ui.isUserTyping,
    userInput: state.lists.userInput.title,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen);
