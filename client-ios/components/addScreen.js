// @flow

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
// import styles from '../styles/styles.js';
// import Header from './header.js';
import { Actions } from 'react-native-router-flux';
import CategoryPicker from './categoryPicker.js';
import Form from '../containers/FormContainer.js';
import styles from '../styles/styles.js';


export default class AddScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchInitialDatabase();
  }

  render() {
    const { submitHandler } = this.props;
    const detailFields = [
      'title'
    ];
    return (
      <View style={styles.container}>
        <Text style={styles.description}>What would you like to add?</Text>
        <Form fieldType="item" detailFields={detailFields} onSubmit={submitHandler}/>
      </View>
    );
  }
}
