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
          <View style={ styles.settingsContainer }>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={this._userLogout}
              underlayColor='#99d9f4'
            >
            <Image source={require('../assets/DoorOpenedFilled-50.png')} style={styles.buttonImage}/>
              <Text style={styles.buttonText}>
                LOGOUT
              </Text>
            </TouchableOpacity>
          </View>
      </Image>
    );
  }
};
