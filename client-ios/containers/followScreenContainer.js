// @flow
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { selectInbox, selectFollowers, selectFollowings, searchUser, followUser, unfollowUser, acceptRecommend } from '../actions/followScreenAction.js';
import FollowScreen from '../components/followScreen.js';
import { generateDataSource } from '../services/helper.js';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

const mapDispatchToProps = (dispatch) => {
  return {
    selectInbox: () => {
      dispatch(selectInbox());
    },
    selectFollowers: () => {
      dispatch(selectFollowers());
    },
    selectFollowings: () => {
      dispatch(selectFollowings());
    },
    submitHandler: _.debounce((data: string) => {
      dispatch(searchUser(data));
    }, 200),
    followUser: (user: Object) => {
      dispatch(followUser(user))
    },
    unfollowUser: (user) => {
      dispatch(unfollowUser(user))
    },
    acceptRecommend: (item) => {
      dispatch(acceptRecommend(item));
    }
  };
};

function mapStateToProps(state, ownProps) {
  let inbox = state.lists.lists.allItems.filter(item => {
    return item.recommended_by_id !== null;
  });
  console.log('called');
  return {
    user: state.auth.user,
    followings: generateDataSource(state.auth.user.followings),
    followers: generateDataSource(state.auth.user.followers),
    inbox: generateDataSource(inbox),
    lists: state.lists.lists.allItems,
    follow: state.follow,
    searchResult: generateDataSource(state.follow.searchResult),
    selection: state.follow.selection
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowScreen);
