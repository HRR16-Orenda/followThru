import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import SettingsScreen from '../components/settingsScreen.js';
import {
  AlertIOS,
  AsyncStorage
} from 'react-native';

const mapDispatchToProps = ( dispatch ) => {
  return {
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
