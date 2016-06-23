import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import CategoryPicker from '../components/categoryPicker.js';



const mapDispatchToProps = (dispatch) => {
  return {
    userTypeStart: (text) => {
      console.log('***********************', text.text)

      // TODO update this to update a state variable with the users input

      dispatch(actions.userTypeStart());
    },
    userCategorySelected: (category) => {
      console.log('***********************', category)
      // TODO update this to update a state variable with the users input
      // dispatch(actions.userCategorySelected());
    }
    // userTypeEnd: (text) => {
    // }
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
