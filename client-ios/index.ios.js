/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * THESIS START FROM HERE!!!!!!!!!!
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Root from './containers/RootContainer.js';

class Orenda extends Component {
  render() {
    return (
      <Root />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    borderWidth: 2,
    borderColor: 'black'
  }
});

AppRegistry.registerComponent('Orenda', () => Orenda);
