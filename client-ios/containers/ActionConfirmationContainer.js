import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import ActionConfirmationScreen from '../components/actionConfirmationScreen.js';

const mapDispatchToProps = (dispatch) => {
  return {
    userCategorySelected: (category) => {
      dispatch(actions.userCategorySelected(category));
    }
  };
};

// TODO Have it revert back to addList afterwards
function mapStateToProps(state, ownProps) {
  return {
    isUserTyping: state.lists.ui.isUserTyping
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionConfirmationScreen);
