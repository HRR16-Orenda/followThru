import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { selectInbox, selectFollowers, selectFollowings, searchUser } from '../actions/followScreenAction.js';
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
    }, 200)
  };
};

function mapStateToProps(state, ownProps) {
  let inbox = state.lists.lists.allItems.filter(item => {
    return item.recommended_by_id !== null;
  });
  return {
    user: state.auth.user,
    followings: generateDataSource(state.auth.user.followings),
    followers: generateDataSource(state.auth.user.followers),
    inbox: generateDataSource(inbox),
    lists: state.lists.lists.allItems,
    follow: state.follow,
    searchResult: generateDataSource(state.follow.searchResult)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowScreen);
