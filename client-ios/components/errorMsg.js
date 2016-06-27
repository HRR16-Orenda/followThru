// @flow

import React, { Component } from "react";

import {
  Text,
  View
} from 'react-native';
import styles from '../styles/styles.js';

export default class ErrorMsgComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { error } = this.props;
    return (
      <View style={styles.flowRight}>
        <Text style={styles.error}>
          {error}
        </Text>
      </View>
    );
  }
}
