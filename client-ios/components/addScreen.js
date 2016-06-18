// @flow

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// import styles from '../styles/styles.js';
// import Header from './header.js';
import { Actions } from 'react-native-router-flux';
import Footer from './footer.js';
import InputBox from './inputBox.js';
import CategoryPicker from './categoryPicker.js';

export default class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
          <Text style={{marginTop: 100, alignSelf: "center"}}>What would you like to add?</Text>
          <InputBox />
          <CategoryPicker />

        <View style={styles.container}>
          <Footer />
        </View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#F5FCFF'
   },
   inputBox: {
     flex: 1,
     height: 30
   }
});
