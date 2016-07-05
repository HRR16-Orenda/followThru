// @flow
// Import libraries
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'
import { reduxForm } from 'redux-form';
// Import containers
import AddItemContainer from './client-ios/containers/AddItemContainer.js';
import SingleListContainer from './client-ios/containers/SingleListContainer.js';
import SettingsContainer from './client-ios/containers/SettingsContainer.js'
import AuthScreenContainer from './client-ios/containers/AuthScreenContainer.js'
import styles from './client-ios/styles/styles.js';

// Import additional functionality
import configureStore from './client-ios/store/configureStore.js';

const store = configureStore()
const RouterWithRedux = connect()(Router);

class Orenda extends Component {
  render() {
    return (
      <Provider store = {store}>
        <RouterWithRedux>
          <Scene
            key="addScreen"
            component={AddItemContainer}
            title="followthru"
            hideNavBar={false}
            type="reset"
            rightButtonImage={require('./client-ios/assets/settings-256.png')}
            rightButtonIconStyle={styles.icon}
            onRight={() => Actions.settingsScreen()}
          />
          <Scene
            key="singleListScreen"
            hideNavBar={false}
            component={SingleListContainer}
            type="push"
            rightButtonImage={require('./client-ios/assets/settings-256.png')}
            rightButtonIconStyle={styles.icon}
            onRight={() => Actions.settingsScreen()}
          />
          <Scene
            key="settingsScreen"
            hideNavBar={false}
            component={SettingsContainer}
            title="Settings"
            type="push"
          />
          <Scene
            key="loginScreen"
            component={AuthScreenContainer}
            initial={true}
            formType="login"
            hideNavBar={true}
            type="reset"
            rightTitle="Sign Up"
            onRight={() => Actions.signupScreen()}
          />
          <Scene
            key="signupScreen"
            component={AuthScreenContainer}
            formType="signup"
            hideNavBar={true}
            type="reset"
            leftTitle="Sign In"
            onLeft={() => Actions.loginScreen()}
          />
        </RouterWithRedux>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Orenda', () => Orenda);
