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
import configureStore from './store/configureStore.js';

const store = configureStore();
class Orenda extends Component {
  render() {
    return (
      <Root store={store} />
    );
  }
}

AppRegistry.registerComponent('Orenda', () => Orenda);
