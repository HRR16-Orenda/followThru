import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import AllListsScreen from '../components/allListsScreen.js';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUpdatedLists: () => {
      dispatch(actions.fetchUpdatedLists());
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    products: state.products
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllListsScreen);
