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
    verifyUserToken: () => {
      dispatch(actions.verifyUserToken());
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  // var state;
  // AsyncStorage.getItem('JWT_TOKEN', function(err, tokenObj){
  //   if(err) {
  //     console.log("error accessing JWT_TOKEN in local storage: ", err);
  //   } else {
  //     if(!JSON.parse(tokenObj).jwt){
  //       console.log("hi!")
  //       return false;
  //     } else {
  //       return Promise.resolve(JSON.parse(tokenObj).jwt)
  //       .then((parsedToken) => {
  //         console.log("userToken from Aysnc: ", parsedToken);
  //         state = {
  //           isFetching: state.auth.isFetching,
  //           isAuthenticated: state.auth.isAuthenticated,
  //           loginError: state.lists.ui.loginError,
  //           loginErrorMsg: state.lists.ui.loginErrorMsg,
  //           signupError: state.lists.ui.signupError,
  //           signupErrorMsg: state.lists.ui.signupErrorMsg,
  //           hasJWTToken: parsedToken
  //         }
  //       })
  //     }
  //   }
  // })
  // AsyncStorage.getItem('JWT_TOKEN', function(err, tokenObj){
  //   if(err || !JSON.parse(tokenObj).jwt) {
  //     return console.log("error accessing JWT_TOKEN in local storage or token does not exist: ", err);
  //   } else {
  //     console.log("ownProps: ", ownProps)
  //     return dispatch(actions.authorizeUser());
  //   }
  // });
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    loginError: state.lists.ui.loginError,
    loginErrorMsg: state.lists.ui.loginErrorMsg,
    signupError: state.lists.ui.signupError,
    signupErrorMsg: state.lists.ui.signupErrorMsg
  }
  // return state
}


export default connect( mapStateToProps, mapDispatchToProps )( AuthScreen );
