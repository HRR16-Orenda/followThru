import { connect } from 'react-redux';
import UsersComponent from '../components/UsersComponent.js';
import * as actions from '../actions/ActionCreator.js';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => {
      dispatch(actions.fetchUser());
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.lists.users
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);
