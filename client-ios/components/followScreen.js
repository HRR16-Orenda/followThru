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


export default class AddScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { clearSuggestion } = this.props;
    return (
        <View style={styles.container}>
          <Text>
            Welcome to following page
          </Text>
        </View>
    );
  }
}
