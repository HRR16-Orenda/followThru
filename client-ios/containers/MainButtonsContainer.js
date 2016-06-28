import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import MainButtons from '../components/mainButtons.js';
import { reduxForm, getValues } from 'redux-form';

const mapDispatchToProps = (dispatch) => {
  return {
    userCategorySelected: (category) => {
      dispatch(actions.userCategorySelected(category));
    },
    addNewListItemDatabase: (item) => {
      console.log(item);
    },
    addItem: (item) => {
      console.log('addItem called', item);
      dispatch(actions.addItem(item));
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
    lists: state.lists.allItems,
    toggleShow: state.lists.toggleShow
  };
}

export default reduxForm({
  form: 'general',
  fields: ['item.category', 'item.title']
}, mapStateToProps,
  mapDispatchToProps
)(MainButtons);
