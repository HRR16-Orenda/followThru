import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import ActionConfirmationScreen from '../components/actionConfirmationScreen.js';
import { reduxForm } from 'redux-form';

const mapDispatchToProps = (dispatch) => {
  return {
    userCategorySelected: (category) => {
      dispatch(actions.userCategorySelected(category));
    },
    toggle: () => {
      console.log('anything');
      dispatch(actions.toggle());
    }
  };
};

// TODO Have it revert back to addList afterwards
function mapStateToProps(state, ownProps) {
  return {
    isUserTyping: state.lists.ui.isUserTyping,
    lists: state.lists.allItems,
    userInput: state.lists.userInput.title,
    category: state.lists.userInput.category,
    toggleShow: state.lists.toggleShow
  };
}

export default reduxForm({
  form: 'general',
  fields: ['item.category']
}, mapStateToProps,
  mapDispatchToProps
)(ActionConfirmationScreen);
