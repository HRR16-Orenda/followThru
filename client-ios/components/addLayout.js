// @flow

import React, { Component } from "react";
import {
  NavigatorIOS
} from 'react-native';
import styles from '../styles/styles.js';
import InputBox from './inputBox.js';

export default class addLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <InputBox />
    );
  }
}
