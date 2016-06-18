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
    this.state = {
      selectedTab: 'Add'
    }
  }
  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <Icon.TabBarItem
          title="Add"
          iconName="ios-create-outline"
          selectedIconName="ios-create-outline"
          onPress = {() => {
            Actions.addScreen();
          }}
        >
          {/*<View style={styles.container}><AddScreen /></View>*/}
          <View style={styles.container}><Text>Home Tab</Text></View>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Lists"
          iconName="ios-albums-outline"
          selectedIconName="ios-albums"
          onPress = {() => {
            Actions.listScreen();
            this.setState({
              selectedTab:'Lists'
            });
          }}
        >
          {/*<ListScreen />*/}
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
