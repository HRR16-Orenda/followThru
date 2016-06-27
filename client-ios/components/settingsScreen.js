import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
} from 'react-native';

import styles from '../styles/styles.js';
import AuthForm from '../containers/AuthFormContainer.js';

import t from 'tcomb-form-native';
let Form = t.form.Form;

let User = t.struct({
  username: t.String,
  password: t.String
});

const options = {};

export default class SettingsScreen extends Component {

  constructor(props) {
    super(props);
  }

  _userLogout = () => {
    this.props.logoutUser();
  }

  _userSignup = () => {
    var creds = this.refs.form.getValue();
    if (creds) { // if validation fails, value will be null
      this.props.signupUser(creds);
    }
  }

  _userLogin = () => {
    var creds = this.refs.form.getValue();
    if (creds) { // if validation fails, value will be null
      this.props.loginUser(creds);
    }
  }

  render() {
    return (
      <View style={ styles.container } >
        <View style={ styles.row }>
          <Text style={ styles.signUpTitle } onPress={() => console.log(this.refs.form)} >Signup/Login</Text>
        </View>
        <AuthForm formType="signup" />
      </View>
    );
  }
};
