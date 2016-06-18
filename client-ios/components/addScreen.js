// @flow

import React, { Component } from "react";
import {
  NavigatorIOS,
  StyleSheet,
  Text
} from 'react-native';
// import styles from '../styles/styles.js';
import Header from './header.js';
import addLayout from './addLayout.js';

export default class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      // <div>
      {/*<NavigatorIOS
        style = {styles.container}
        initialRoute = {{
          title: 'add layout',
          component: addLayout
        }}
      />*/}
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
