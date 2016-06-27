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
import { reduxForm } from 'redux-form';

// Import containers
import AddItemContainer from './containers/AddItemContainer.js';
import AllListsContainer from './containers/AllListsContainer.js';
import SingleListContainer from './containers/SingleListContainer.js';
import ActionConfirmationContainer from './containers/ActionConfirmationContainer.js';
import CategoryPickerContainer from './containers/CategoryPickerContainer.js'
import SettingsContainer from './containers/SettingsContainer.js'
import AuthScreenContainer from './containers/AuthScreenContainer.js'
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
            </Scene>
            <Scene key="actionConfirmation" component={ActionConfirmationContainer} title="Action Confirmation" />
            <Scene key="list" title="List" icon={TabIcon} >
              <Scene key="allListsScreen" component={AllListsContainer} title="All your lists" />
              <Scene key="singleListScreen" component={SingleListContainer} title="One single list" />
            </Scene>
            <Scene key="settingsScreen" icon={TabIcon} component={SettingsContainer} title="Settings" />
          </Scene>
          <Scene key="auth" initial={true} >
            <Scene key="loginScreen" component={AuthScreenContainer} formType="login" title="Auth" type="replace" rightTitle="Signup" onRight={() => Actions.signupScreen()}/>
            <Scene key="signupScreen" component={AuthScreenContainer} formType="signup" title="Auth" type="replace" leftTitle="Login" onLeft={() => Actions.loginScreen()}/>
          </Scene>
          {/*<Scene key="authScreen" component={AuthScreenContainer} title="Auth" initial={true} />*/}
        </RouterWithRedux>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Orenda', () => Orenda);
