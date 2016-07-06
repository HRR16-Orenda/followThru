// @flow

import React, { Component } from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  DeviceEventEmitter
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import Form from '../containers/FormContainer.js';
import styles from '../styles/styles.js';
import MainButtons from '../containers/MainButtonsContainer.js'



export default class AddScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    Keyboard.addListener('keyboardWillShow', this.props.keyboardIsShowing)
    Keyboard.addListener('keyboardWillHide', this.props.keyboardIsNotShowing)
  }

  render() {
    const { clearSuggestion } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
            dismissKeyboard();
            clearSuggestion();
          }
        }

      >
        <View style={styles.container}>
          <Form />
          <MainButtons />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
