// @flow

import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from '../styles/styles.js';
import { Actions } from 'react-native-router-flux';

export default class CategoryPicker extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Did you mean...</Text>
        <View style={styles.categoryContainer}>
          <TouchableHighlight style={{margin: 10}} onPress={() => console.log(this.props)}>
            <Text style={styles.text}>Book</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{margin: 10}}>
            <Text style={styles.text}>Movies</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{margin: 10}}>
            <Text style={styles.text}>Music</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
