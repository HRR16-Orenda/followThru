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
      <View style = {{height: 50, borderColor: 'gray', borderWidth: 1, marginLeft: 35, marginRight: 35, alignItems: "center"}}>
        <Text>Did you mean...</Text>
        <View style={{flex: 3, flexDirection: "row"}}>
          <TouchableHighlight style={{margin: 10}} onPress={() => console.log(this.props)}>
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
