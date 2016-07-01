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
    buttonStyle: state.lists.buttonStyle,
    userInput: state.lists.userInput,
    saved: state.lists.checked,
    filter: state.lists.filter,
    buttons: [
        {icon: 'ios-list-box-outline',
        category: 'DO'},

        {icon: 'ios-cart-outline',
        category: 'BUY'},

        {icon: 'ios-book-outline',
        category: 'READ'},

        {icon: 'ios-headset-outline',
        category:'LISTEN'},

        {icon: 'ios-restaurant-outline',
        category: 'EAT'},

        {icon: 'ios-star-outline',
        category: 'WATCH'}
    ]
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainButtons);
