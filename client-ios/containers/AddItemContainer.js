import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import AddScreen from '../components/addScreen.js';

import { Actions } from 'react-native-router-flux';

const mapDispatchToProps = (dispatch) => {
  return {
    clearSuggestion: () => {
      dispatch(actions.clearSuggestion());
    },
    keyboardIsShowing: () => {
      dispatch(actions.keyboardIsShowing());
    },
    keyboardIsNotShowing: () => {
      dispatch(actions.keyboardIsNotShowing());
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    isAuthorized: state.auth.isAuthorized
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen);
