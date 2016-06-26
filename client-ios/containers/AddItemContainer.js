import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import AddScreen from '../components/addScreen.js';

import { Actions } from 'react-native-router-flux';

const mapDispatchToProps = (dispatch) => {
  return {
    userTypeEnd: (text) => {
      Actions.actionConfirmationScreen()
      // dispatch(actions.userTypeEnd(text));
    },
    fetchInitialDatabase: () => {
      dispatch(actions.fetchInitialDatabase());
    },
    submitHandler: (data) => {
      console.log(data.item);
      Actions.categoryPicker();
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
