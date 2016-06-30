// @flow
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { modalOpen, modalClose } from '../actions/listScreenAction.js';
import SingleListScreen from '../components/singleListScreen.js';
import { ListView } from 'react-native';

const generateDataSource = (list) => {
  let inputList = [];
  list.map((item)=>{
    inputList.push(item)
  });

  let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
  }).cloneWithRows(inputList);

  return dataSource;
}

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
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  let filteredItems = state.lists.lists.allItems.filter(item => {
    return item.category === state.lists.filter;
  });
  return {
    user: state.auth.user.username,
    lists: state.lists.lists.allItems,
    filter: state.lists.filter,
    listItems: state.lists.selectedItems,
    dataSource: generateDataSource(state.lists.lists.allItems),
    modal: state.lists.modal
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleListScreen);
