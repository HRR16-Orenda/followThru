// @flow
import React, { Component } from "react";
import {
  TabBarIOS,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AddScreen from './addScreen.js'
// import ListScreen from './listScreen.js'

import { Actions } from 'react-native-router-flux';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   selectedTab: 'Add'
    // }
  }
  render() {
    console.log(this.props);
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title="Add"
          iconName="ios-create-outline"
          selectedIconName="ios-create"
          onPress = {() => {
            Actions.addScreen();
            this.setState({
              selectedTab:'Lists'
            });
          }}
        >


        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Lists"
          iconName="ios-albums-outline"
          selectedIconName="ios-albums"
          selected={this.props.tabSelected === 'lists'}
          onPress = {() => {
            Actions.allListsScreen();
            this.props.selectTab('lists');
          }}
        >

        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Settings"
          iconName="ios-settings-outline"
          selectedIconName="ios-settings"
          onPress = {() => {
            Actions.settingsScreen();
            this.setState({
              selectedTab:'Settings'
            });
          }}
        >
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  description: {
    fontSize: 20,
    backgroundColor: 'white'
  }
});
