import React, { Component } from 'react';
import {
  AsyncStorage,
  Text,
  View,
  TouchableOpacity,
  Image
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
      <Image source={require('../assets/final2.jpg')} style={styles.backgroundImage}>
        <View style={ styles.container } >
          <View style={ styles.formContainer }>
            <TouchableOpacity
              style={styles.button}
              onPress={this._userLogout}
              underlayColor='#99d9f4'
            >
              <Text style={styles.buttonText}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Image>
    );
  }
};
