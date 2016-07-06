// @flow
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { modalOpen, modalClose, deleteConfirmOn, deleteConfirmOff, dateChange, shareItem } from '../actions/listScreenAction.js';
import SingleListScreen from '../components/singleListScreen.js';
import { generateDataSource } from '../services/helper.js';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserSingleList: (listName, listing) => {
      dispatch(actions.fetchUserSingleList());
    },
    deleteListItem: (item) => {
      dispatch(actions.deleteListItem(item));
    },
    toggleItem: (item) => {
      dispatch(actions.toggleItem(item));
    },
    modalOpen: (item: Object) => {
      dispatch(modalOpen(item));
    },
    modalClose: () => {
      dispatch(modalClose());
    },
    dateChange: (date) => {
      dispatch(dateChange(date));
    },
    shareItem: (item) => {
      console.log(item);
      dispatch(shareItem(item));
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  let filteredItems = state.lists.lists.allItems.filter(item => {
    return item.category === state.lists.filter && item.recommended_by_id === null;
  });
  return {
    user: state.auth.user.username,
    lists: state.lists.lists.allItems,
    filter: state.lists.filter,
    listItems: state.lists.selectedItems,
    dataSource: generateDataSource(filteredItems),
    modal: state.lists.modal,
    deleteConfirm: state.lists.ui.deleteConfirm,
    date: state.lists.ui.date
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleListScreen);
