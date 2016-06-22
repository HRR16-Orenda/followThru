import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import SingleListScreen from '../components/singleListScreen.js';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserSingleList: (listName, listing) => {
      dispatch(actions.fetchUserSingleList());
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  // console.log("")
  return {
    user: state.lists.user.username,
    lists: state.lists.lists.allItems,
    listItems: state.lists.selectedItems,
    dataSource: state.lists.dataSource.singleListDataSource,
    isLoading: state.lists.ui.singleListIsLoading
  };
}
// user: state.lists.user.username,
// lists: state.lists.lists.allItems,
// dataSource: state.lists.dataSource.allListsDataSource,
// isLoading: state.lists.ui.allListsIsLoading



export default connect(mapStateToProps, mapDispatchToProps)(SingleListScreen);
