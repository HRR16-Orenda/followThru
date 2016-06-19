// @flow

import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from '../styles/styles.js';

export default class categoryPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style = {{height: 50, borderColor: 'gray', borderWidth: 1, marginLeft: 35, marginRight: 35, alignItems: "center"}}>
        <Text>Did you mean...</Text>
        <View style={{flex: 3, flexDirection: "row"}}>
          <TouchableHighlight style={{margin: 10}}>
            <Text>Book</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{margin: 10}}>
            <Text>Movies</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{margin: 10}}>
            <Text>Music</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
