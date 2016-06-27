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

export default class SettingsScreen extends Component {

  constructor(props) {
    super(props);
  }

  _userLogout = () => {
    this.props.logoutUser();
  }

  render() {
    return (
      <View style={ styles.container } >
        <View style={ styles.formContainer }>
          <TouchableHighlight
            style={styles.button}
            onPress={this._userLogout}
            underlayColor='#99d9f4'
          >
            <Text style={styles.buttonText}>
              Logout
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
};
