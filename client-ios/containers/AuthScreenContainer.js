// @flow
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import AuthScreen from '../components/authScreen.js';
import {
  AlertIOS,
  AsyncStorage
} from 'react-native';

const mapDispatchToProps = ( dispatch ) => {
  return {
    loginUser: (creds: {username: string, email: void, password: string}) => {

      // dispatch(actions.loginUser(creds));
      AlertIOS.alert(", thank you for returning!")
    },
    logoutUser: () => {
      // dispatch(actions.logoutUser());
      AlertIOS.alert("Sorry to see you go!!");
    },
    signupUser: (creds: {username: string, email: string, password: string}) => {
      // dispatch(actions.signupUser());
      AlertIOS.alert(" thank you for joining!")
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}


export default connect( mapStateToProps, mapDispatchToProps )( AuthScreen );
