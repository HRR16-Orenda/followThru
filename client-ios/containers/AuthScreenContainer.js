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
      dispatch(actions.loginUser(creds));
    },
    /*
     * @params - creds: Object {username: string, email: string, password: string}
     */
    signupUser: (creds) => {
      dispatch(actions.signupUser(creds));
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}


export default connect( mapStateToProps, mapDispatchToProps )( AuthScreen );
