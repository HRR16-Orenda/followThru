import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import AllListsScreen from '../components/allListsScreen.js';
import { ListView } from 'react-native';


const generateDataSource = (list) => {
  let inputList = [];
  console.log('lets see that list ', list)
  list.map((item) => {
    inputList.push(
      { listTitle: item }
    )
  });

  let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
  }).cloneWithRows(inputList);

  return dataSource;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserLists: () => {
      dispatch(actions.fetchUserLists());
    },
    updateFilter: ( filterString ) => {
      dispatch( actions.updateFilter( filterString ) );
    }

  };
};

const mapStateToProps = (state, ownProps) => {
    return {
    user: state.lists.user.username,
    lists: state.lists.lists.allItems,
    dataSource: generateDataSource(state.lists.lists.category),
    isLoading: state.lists.ui.isLoading,
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllListsScreen);
