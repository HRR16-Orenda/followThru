import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import AddScreen from '../components/addScreen.js';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUpdatedLists: () => {
      dispatch(actions.fetchUpdatedLists());
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen);
