// @flow
import React, { Component } from 'react';
import {
  AsyncStorage,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
} from 'react-native';

import styles from '../styles/styles.js';
import AuthForm from '../containers/AuthFormContainer.js';

export default class AuthScreen extends Component {

  constructor(props) {
    super(props);
  }

  _userSignup = (creds) => {
    // console.log(creds);
      this.props.signupUser(creds);
  }

  _userLogin = (creds) => {
    // console.log(creds);
      this.props.loginUser(creds);
  }

  _displayError = (message) => {
    return(
      <View>
        <Text style={ styles.error }>{ message }</Text>
      </View>
    )
  }

  render() {
    const {
      formType,
      isAuthenticated,
      loginError,
      loginErrorMsg,
      signupError,
      signupErrorMsg
    } = this.props;
    let handler = formType === 'signup' ? this._userSignup : this._userLogin;
    return (
      <View style={ styles.container } >
        <View>
          <Text style={ styles.signUpTitle } onPress={() => console.log(this.props)} >{formType[0].toUpperCase() + formType.substr(1)}</Text>
        </View>
        { loginError === true && formType === "login" ? this._displayError(loginErrorMsg) : null }
        { signupError === true && formType === "signup" ? this._displayError(signupErrorMsg) : null }
        <AuthForm formType={formType} onSubmit={handler}/>
      </View>
    );
  }
};
