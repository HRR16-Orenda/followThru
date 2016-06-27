// @flow

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CategoryPicker from './categoryPicker.js';
import Form from '../containers/FormContainer.js';
import styles from '../styles/styles.js';
import Icon from 'react-native-vector-icons/Ionicons';


export default class AddScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchInitialDatabase();
  }

  render() {
    return (
      <View style={styles.container}>
        <Form />
      </View>
    );
  }
}
