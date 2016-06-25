import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import SettingsScreen from '../components/settingsScreen.js';

const mapDispatchToProps = ( dispatch ) => {
  return {
    loginUser: (creds) => {
      dispatch(actions.loginUser(creds));
    },
    logoutUser: () => {
      dispatch(actions.logoutUser());
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.lists.ui.isLoading,
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated
  };
}


export default connect( mapStateToProps, mapDispatchToProps )( SettingsScreen );
