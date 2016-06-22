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
  return {
    user: "test",
    products: [1,2,3],
    listItems: state.lists.lists,
    dataSource: state.lists.singleListDataSource,
    isLoading: state.lists.singleListIsLoading
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleListScreen);
