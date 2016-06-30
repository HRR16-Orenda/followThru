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
      [
        {icon: 'ios-list-box-outline',
        category: 'Do'},

        {icon: 'ios-cart-outline',
        category: 'Buy'},

        {icon: 'ios-book-outline',
        category: 'Read'}
      ],
      [
        {icon: 'ios-headset-outline',
        category:'Listen'},

        {icon: 'ios-restaurant-outline',
        category: 'Eat'},

        {icon: 'ios-star-outline',
        category: 'Watch'}
      ]
    ]
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainButtons);
