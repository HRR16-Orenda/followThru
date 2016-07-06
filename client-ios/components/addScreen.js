// @flow

import React, { Component } from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Form from '../containers/FormContainer.js';
import styles from '../styles/styles.js';
import MainButtons from '../containers/MainButtonsContainer.js';
import LinearGradient from 'react-native-linear-gradient';


export default class AddScreen extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount = () => {
  //   if(!this.props.isAuthorized){
  //     Actions.loginScreen()
  //   }
  // }

  render() {
    const { clearSuggestion } = this.props;
    return (
      <LinearGradient colors={['#eb1d95', '#ad1496', '#5e0997']} style={styles.linearGradient}>
      <TouchableWithoutFeedback
        onPress={clearSuggestion}
      >
        <View style={styles.container}>
          <Form />
          <MainButtons />
        </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
    );
  }
}
