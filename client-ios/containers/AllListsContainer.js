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
    user: "test",
    products: [1,2,3],
    lists: state.lists.lists,
    dataSource: state.lists.dataSource,
    isLoading: state.lists.isLoading
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllListsScreen);
