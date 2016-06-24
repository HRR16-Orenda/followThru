import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import AllListsScreen from '../components/allListsScreen.js';
import { ListView } from 'react-native';


const generateDataSource = (list) => {
  let inputList = [];
  list.map((item)=>{
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
      console.log( "from the container: ", filterString );
      dispatch( actions.updateFilter( filterString ) );
    }

  };
};

const mapStateToProps = (state, ownProps) => {
  const data = state;
  return {
    user: state.lists.user.username,
    lists: state.lists.lists.allItems,
    // dataSource: state.lists.dataSource.allListsDataSource,
    dataSource: generateDataSource(state.lists.lists.category),
    isLoading: state.lists.ui.isLoading
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllListsScreen);
