import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import CategoryPicker from '../components/categoryPicker.js';

const mapDispatchToProps = (dispatch) => {
  return {
    userCategorySelected: () => {
      console.log('***********************')
      // TODO update this to update a state variable with the users input
      // dispatch(actions.userCategorySelected());
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    isUserTyping: state.lists.ui.isUserTyping
// state.addItem.whatever
    // isUserTyping: state.
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPicker);
