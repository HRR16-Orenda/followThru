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

// Import screens
import AddScreen from './components/addScreen.js';
import AllListsScreen from './components/allListsScreen.js';
import SingleListScreen from './components/singleListScreen.js';
import ActionConfirmationScreen from './components/actionConfirmationScreen.js';


// Import additional functionality
import RootContainer from './containers/RootContainer.js';
import Store from './store/configureStore.js';

const RouterWithRedux = connect()(Router);

const store = Store;
class Orenda extends Component {
  render() {
    return (
      <Provider store = {store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="addScreen" component={AddScreen} title="Add Screen" initial={true} tabs={true} hideBackImage={true}>
            </Scene>
            <Scene key="allListsScreen" component={AllListsScreen} title="All your lists" tabs={true} hideBackImage={true}>
            </Scene>
            <Scene key="singleListScreen" component={SingleListScreen} title="One single list" tabs={true} hideBackImage={true}>
            </Scene>
            <Scene key="actionConfirmationScreen" component={ActionConfirmationScreen} title="Item added" tabs={true} hideBackImage={true}>
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Orenda', () => Orenda);
