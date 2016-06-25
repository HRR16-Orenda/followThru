import { connect } from 'react-redux';
import UsersComponent from '../components/UsersComponent.js';
import * as actions from '../actions/ActionCreator.js';
import { addUser } from '../actions/UserAction.js';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => {
      dispatch(actions.fetchUser());
    },
    addUser: (data) => {
      console.log('WAWA submitted!!!!', data.user);
      dispatch(addUser(data.user));
    },
    removeUser: (id: string) => {
      dispatch(actions.removeUser(id));
      console.log('WAWA removed!!!!!!');
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.lists.users
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);
