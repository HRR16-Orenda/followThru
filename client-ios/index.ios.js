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
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'

// Import containers
import AddItemContainer from './containers/AddItemContainer.js';
import AllListsContainer from './containers/AllListsContainer.js';
import SingleListContainer from './containers/SingleListContainer.js';
import ActionConfirmationContainer from './containers/ActionConfirmationContainer.js';

// Import additional functionality
import configureStore from './store/configureStore.js';

const store = configureStore()
const RouterWithRedux = connect()(Router);

class Orenda extends Component {
  render() {
    return (
      <Provider store = {store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="addScreen" component={AddItemContainer} title="Add Screen" initial={true} tabs={true} hideBackImage={true}>
            </Scene>
            <Scene key="allListsScreen" component={AllListsContainer} title="All your lists" tabs={true} hideBackImage={true}>
            </Scene>
            <Scene key="singleListScreen" component={SingleListContainer} title="One single list" tabs={true} hideBackImage={true}>
            </Scene>
            <Scene key="actionConfirmationScreen" component={ActionConfirmationContainer} title="Item added" tabs={true} hideBackImage={true}>
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Orenda', () => Orenda);
