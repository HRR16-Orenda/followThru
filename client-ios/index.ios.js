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
import FollowScreenContainer from './containers/followScreenContainer.js'
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
            title="followthru"
            hideNavBar={false}
            navigationBarStyle={styles.navigationBar}
            titleStyle={styles.navigationBarText}
            type="reset"
            leftButtonImage={require('./assets/UserGroup-50.png')}
            leftButtonIconStyle={styles.icon}
            onLeft={() => Actions.followScreen()}
            rightButtonImage={require('./assets/Settings-50.png')}
            rightButtonIconStyle={styles.icon}
            onRight={() => Actions.settingsScreen()}
          />
          <Scene
            key="singleListScreen"
            hideNavBar={false}
            navigationBarStyle={styles.navigationBar}
            titleStyle={styles.navigationBarText}
            component={SingleListContainer}
            type="push"
            rightButtonImage={require('./assets/Settings-50.png')}
            rightButtonIconStyle={styles.icon}
            onRight={() => Actions.settingsScreen()}
            backButtonImage={require('./assets/Back-50.png')}
          />
          <Scene
            key="followScreen"
            hideNavBar={false}
            navigationBarStyle={styles.navigationBar}
            titleStyle={styles.navigationBarText}
            component={FollowScreenContainer}
            title="SOCIAL"
            type="push"
            backButtonImage={require('./assets/Back-50.png')}
          />
          <Scene
            key="settingsScreen"
            hideNavBar={false}
            navigationBarStyle={styles.navigationBar}
            titleStyle={styles.navigationBarText}
            component={SettingsContainer}
            title="SETTINGS"
            type="push"
            backButtonImage={require('./assets/Back-50.png')}
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
