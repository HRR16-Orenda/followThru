// @flow
// Import libraries
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'
import { reduxForm } from 'redux-form';
// Import containers
import AddItemContainer from './containers/AddItemContainer.js';
import SingleListContainer from './containers/SingleListContainer.js';
import SettingsContainer from './containers/SettingsContainer.js'
import AuthScreenContainer from './containers/AuthScreenContainer.js'
import styles from './styles/styles.js';

// Import additional functionality
import configureStore from './store/configureStore.js';

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
            title="Add Screen"
            type="reset"
            rightButtonImage={require('./assets/settings-256.png')}
            rightButtonIconStyle={styles.icon}
            onRight={() => Actions.settingsScreen()}
            leftTitle="ListScreen"
            onLeft={() => Actions.singleListScreen()}
          />
          <Scene
            key="singleListScreen"
            component={SingleListContainer}
            title="One single list"
            type="push"
            rightButtonImage={require('./assets/settings-256.png')}
            rightButtonIconStyle={styles.icon}
            onRight={() => Actions.settingsScreen()}
          />
          <Scene
            key="settingsScreen"
            component={SettingsContainer}
            title="Settings"
            type="push"
          />
          <Scene
            key="loginScreen"
            component={AuthScreenContainer}
            initial={true}
            formType="login"
            title="Welcome!"
            type="reset"
            rightTitle="Signup"
            onRight={() => Actions.signupScreen()}
          />
          <Scene
            key="signupScreen"
            component={AuthScreenContainer}
            formType="signup"
            title="Welcome!"
            type="reset"
            leftTitle="Login"
            onLeft={() => Actions.loginScreen()}
          />
        </RouterWithRedux>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Orenda', () => Orenda);
