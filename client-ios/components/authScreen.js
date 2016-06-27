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

  _userLogout = () => {
    this.props.logoutUser();
  }

  _userSignup = (creds) => {
    console.log(creds);
    // var creds = this.refs.form.getValue();
    // if (creds) { // if validation fails, value will be null
      this.props.signupUser(creds);
    // }
  }

  _userLogin = (creds) => {
    console.log(creds);
    // var creds = this.refs.form.getValue();
    // if (creds) { // if validation fails, value will be null
      this.props.loginUser(creds);
    // }
  }

  render() {
    const { formType } = this.props;
    let handler = formType === 'signup' ? this._userSignup : this._userLogin;
    return (
      <View style={ styles.container } >
        <View>
          <Text style={ styles.signUpTitle } onPress={() => console.log(this.props)} >{formType[0].toUpperCase() + formType.substr(1)}</Text>
        </View>
        <AuthForm formType={formType} onSubmit={handler}/>
      </View>
    );
  }
};
