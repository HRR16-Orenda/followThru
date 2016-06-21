import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import SingleListScreen from '../components/singleListScreen.js';

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
    products: [1,2,3]
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleListScreen);
