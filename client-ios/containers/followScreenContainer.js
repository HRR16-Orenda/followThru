import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import FollowScreen from '../components/followScreen.js';

import { Actions } from 'react-native-router-flux';

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowScreen);
