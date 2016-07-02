// @flow
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import AuthScreen from '../components/authScreen.js';
import { Actions } from 'react-native-router-flux';
import {
  AlertIOS,
  AsyncStorage
} from 'react-native';

const mapDispatchToProps = (dispatch) => {
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
    },
    /*
     * @params - no params required
     */
    resetDisplay: () => {
     dispatch(actions.resetDisplay());
    },
    /*
     * @params - no params required
     */
    goToSignup: () => {
     Actions.signupScreen();
    },
    /*
     * @params - no params required
     */
    goToSignin: () => {
     Actions.loginScreen();
    },
    /*
     * @params - no params required
     */
    verifyUserToken: () => {
    dispatch(actions.verifyUserToken());
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    loginError: state.lists.ui.loginError,
    loginErrorMsg: state.lists.ui.loginErrorMsg,
    signupError: state.lists.ui.signupError,
    signupErrorMsg: state.lists.ui.signupErrorMsg
  }
}


export default connect( mapStateToProps, mapDispatchToProps )( AuthScreen );
