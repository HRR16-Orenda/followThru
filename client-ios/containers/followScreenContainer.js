import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { selectSearch, selectFollowers, selectFollowings } from '../actions/followScreenAction.js';
import FollowScreen from '../components/followScreen.js';
import { generateDataSource } from '../services/helper.js';

import { Actions } from 'react-native-router-flux';

const mapDispatchToProps = (dispatch) => {
  return {
    selectSearch: () => {
      dispatch(selectSearch());
    },
    selectFollowers: () => {
      dispatch(selectFollowers());
    },
    selectFollowings: () => {
      dispatch(selectFollowings());
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.auth.user,
    followings: generateDataSource(state.auth.user.followings),
    followers: generateDataSource(state.auth.user.followers),
    lists: state.lists.lists.allItems,
    follow: state.follow
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowScreen);
