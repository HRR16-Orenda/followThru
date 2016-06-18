// @flow
// Import libraries
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'redux'

// Import additional functionality
import RootContainer from './containers/RootContainer.js';
import configureStore from './store/configureStore.js';
import Footer from './components/footer.js';

const store = configureStore();
class Orenda extends Component {
  render() {
    return (
      <Provider store = {store}>
        <RootContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Orenda', () => Orenda);
