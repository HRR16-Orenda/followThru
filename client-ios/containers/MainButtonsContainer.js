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
    buttonStyle: state.lists.ui.buttonStyle,
    userInput: state.lists.userInput,
    buttons: [
      [
        {icon: 'ios-list-box-outline',
        category: 'To-Dos'},

        {icon: 'ios-cart-outline',
        category: 'Groceries'},

        {icon: 'ios-musical-notes-outline',
        category: 'Music'}
      ],
      [
        {icon: 'ios-headset-outline',
        category: 'Movies/TV'},

        {icon: 'ios-restaurant-outline',
        category: 'Restaurants'},

        {icon: 'ios-star-outline',
        category: 'Custom'}
      ]
    ]
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainButtons);
