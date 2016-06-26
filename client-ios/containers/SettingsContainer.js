import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import SettingsScreen from '../components/settingsScreen.js';
import {
  AlertIOS,
  AsyncStorage
} from 'react-native';

const mapDispatchToProps = ( dispatch ) => {
  return {
    loginUser: (creds) => {
      // dispatch(actions.loginUser(creds));
      AlertIOS.alert(creds.username + ", thank you for returning!")
    },
    logoutUser: () => {
      // dispatch(actions.logoutUser());
      AlertIOS.alert("Sorry to see you go!!");
    },
    signupUser: (creds) => {
      // dispatch(actions.signupUser());
      AlertIOS.alert(creds.username + ", thank you for joining!")
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.lists.ui.isLoading,
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated
  };
}


export default connect( mapStateToProps, mapDispatchToProps )( SettingsScreen );
