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
import CategoryPickerContainer from './containers/CategoryPickerContainer.js'
import SettingsContainer from './containers/SettingsContainer.js'
import TabIcon from './components/icons.js';

// Import additional functionality
import configureStore from './store/configureStore.js';

const store = configureStore()
const RouterWithRedux = connect()(Router);


class Orenda extends Component {
  render() {
    return (
      <Provider store = {store}>
        <RouterWithRedux>
          <Scene key="nav" tabs={true} hideNavBar={true} >
            <Scene key="add" title="Add" icon={TabIcon} >
              <Scene key="addScreen" component={AddItemContainer} title="Add Screen" />
              <Scene key="categoryPicker" component={CategoryPickerContainer} title="Category Picker" />
            </Scene>
            <Scene key="list" title="List" icon={TabIcon} >
              <Scene key="allListsScreen" component={AllListsContainer} title="All your lists" />
              <Scene key="singleListScreen" component={SingleListContainer} title="One single list" />
            </Scene>
            <Scene key="settingsScreen" icon={TabIcon} component={SettingsContainer} title="Settings" initial={true} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Orenda', () => Orenda);
