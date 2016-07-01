// @flow

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Form from '../containers/FormContainer.js';
import styles from '../styles/styles.js';
import MainButtons from '../containers/MainButtonsContainer.js'


export default class AddScreen extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount = () => {
  //   if(!this.props.isAuthorized){
  //     Actions.loginScreen()
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <Form />
        <MainButtons />
      </View>
    );
  }
}
