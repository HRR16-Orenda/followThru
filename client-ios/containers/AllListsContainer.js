import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import AllListsScreen from '../components/allListsScreen.js';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserLists: () => {
      dispatch(actions.fetchUserLists());
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.lists.user.username,
    lists: state.lists.lists.allItems,
    dataSource: state.lists.dataSource.allListsDataSource,
    isLoading: state.lists.ui.allListsIsLoading
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllListsScreen);
