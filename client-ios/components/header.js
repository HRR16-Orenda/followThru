// @flow
import React, { Component } from "react";
import {
  NavigatorIOS,
  StyleSheet
} from 'react-native';
import addLayout from './addLayout.js';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute = {{
          title: 'add layout',
          component: addLayout
        }}
      />
    );
  }
}

var styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#F5FCFF'
   }
});
