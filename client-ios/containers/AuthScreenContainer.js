// @flow
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import AuthScreen from '../components/authScreen.js';
import { Actions } from 'react-native-router-flux';
import {
  AlertIOS,
  AsyncStorage
} from 'react-native';

const mapDispatchToProps = ( dispatch ) => {
  return {
    /*
     * @params - creds: Object {username: string, password: string}
     */
    loginUser: (creds) => {

      // dispatch(actions.loginUser(creds));
      AlertIOS.alert(creds.username + ", thank you for returning!");

      // temporary redirectings
      // This redirecting should be move to inside of 'loginSuccess' action creator
      Actions.addScreen();
    },
    logoutUser: () => {
      // dispatch(actions.logoutUser());
      AlertIOS.alert("Sorry to see you go!!");
    },
    /*
     * @params - creds: Object {username: string, email: string, password: string}
     */
    signupUser: (creds) => {
      dispatch(actions.signupUser());
      // AlertIOS.alert(creds.username + ", thank you for joining!")
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}


export default connect( mapStateToProps, mapDispatchToProps )( AuthScreen );
