// @flow

import React, { Component } from "react";
import {
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import styles from '../styles/styles.js';
// import Header from './header.js';
import addLayout from './addLayout.js';
import { Actions } from 'react-native-router-flux';
import Footer from './footer.js';

export default class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={{margin: 128}}>
        <Text>This is PageOne!</Text>
      </View>
      // <div>
      // <Text>Its working</Text>
      // </div>
    );
  }
}


var styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#F5FCFF'
   }
});
