import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import MainButtons from '../components/mainButtons.js';
import { reduxForm, getValues } from 'redux-form';

const mapDispatchToProps = (dispatch) => {
  return {
    mainButtonPressed: (buttonCategory) => {
      dispatch(actions.mainButtonPressed(buttonCategory));
    }
  };
};

// TODO Have it revert back to addList afterwards
function mapStateToProps(state, ownProps) {
  return {
    lists: state.lists.allItems,
    toggleShow: state.lists.toggleShow,
    buttons: state.lists.buttons,
    buttonStyle: state.lists.ui.buttonStyle,
    userInput: state.lists.userInput
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainButtons);
