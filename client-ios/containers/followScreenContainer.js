import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import FollowScreen from '../components/followScreen.js';
import { generateDataSource } from '../services/helper.js';

import { Actions } from 'react-native-router-flux';

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.auth.user,
    dataSource: generateDataSource(state.auth.user.followings)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowScreen);
