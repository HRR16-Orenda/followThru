import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import ActionConfirmationScreen from '../components/actionConfirmationScreen.js';

const mapDispatchToProps = (dispatch) => {
  console.log('all lists dispatch ', dispatch);
  return {
    fetchUserLists: () => {
      console.log('in the container');
      dispatch(actions.fetchUserLists());
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  console.log('all lists state ', state);
  console.log('all lists ownProps ', ownProps);
  return {
    user: "test",
    products: [1,2,3]
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionConfirmationScreen);
