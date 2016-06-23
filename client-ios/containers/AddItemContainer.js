import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import AddScreen from '../components/addScreen.js';

const mapDispatchToProps = (dispatch) => {
  return {
    userTypeStart: () => {
      dispatch(actions.userTypeStart());
    },
    userTypeEnd: (text) => {
      console.log('text');
      // dispatch(actions.userTypeEnd(text));
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.lists.user.username,
    lists: state.lists.lists.allItems,
    dataSource: state.lists.dataSource.allListsDataSource,
    isLoading: state.lists.ui.allListsIsLoading,
    isUserTyping: state.lists.ui.isUserTyping
// state.addItem.whatever
    // isUserTyping: state.
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen);
