// @flow

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/styles.js';


export default class followForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      fields,
      handleSubmit,
      resetForm,
      onChange
    } = this.props;
    return (
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            onChangeText={onChange}
            placeholder={"Search for friends"}
            {...fields.username}
            autoCapitalize="none"
          />
        </View>
    );
  }
}
