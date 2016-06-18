// @flow

import React, { Component } from "react";
import {
  TextInput
} from 'react-native';
import styles from '../styles/styles.js';

export default class inputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <TextInput
        style = {{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20, marginLeft: 20, marginRight: 20}}
        //onChangeText={(text) => this.setState({text})}
      />
    );
  }
}
